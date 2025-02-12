DEFINE FUNCTION OVERWRITE fn::unique_tags() {
	LET $res = (SELECT tags FROM listings);

	RETURN function($res) {
	    const [res] = arguments;

	    return res.map(x => x.tags).flatMap(x => x).reduce((acc, tag) => {
	        if (!acc.find(x => x.key == tag.key)) {
	            acc.push(tag)
	        }
	        return acc
	    }, [])
	}
} PERMISSIONS FULL;

DEFINE FUNCTION OVERWRITE fn::updateListingsRecord($data: object) {
	LET $parsed = function($data) {
		let tName, tId;
		const { id, tags, owner, ...data} = arguments[0];

		[tName, tId] = id.split(":");
		const idRec = new Record(tName, tId);

		[tName, tId] = owner.split(":");
		data.owner = new Record(tName, tId);

		data.tags = tags.map(idStr => {
			[tName, tId] = idStr.split(":");
			return new Record(tName, parseInt(tId) || tId);
		});

		return {
			id: idRec,
			data
		};
	};
	LET $res = (UPDATE $parsed.id CONTENT $parsed.data RETURN AFTER);
	RETURN $res;
} PERMISSIONS WHERE $auth

DEFINE FUNCTION OVERWRITE fn::createListingsRecord($data: object) {
	LET $parsed = function($data) {
		let tName, tId;
		const { owner, tags, ...data} = arguments[0];

		[tName, tId] = owner.split(":");
		data.owner = new Record(tName, tId);

		data.tags = tags.map(idStr => {
			[tName, tId] = idStr.split(":");
			return new Record(tName, parseInt(tId) || tId);
		});

		return data;
	};
	LET $res = (CREATE listings CONTENT $parsed RETURN AFTER);
	RETURN $res;
} PERMISSIONS WHERE $auth