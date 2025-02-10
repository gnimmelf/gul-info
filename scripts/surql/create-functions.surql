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
} PERMISSIONS FULL

DEFINE FUNCTION OVERWRITE fn::updateListingsRecord($data: object) {
	LET $parts = function($data) {
			const [data] = arguments;
		    const { id, tags, owner, ...rest} = data;
			return { id, tags, owner, rest };
		};

	LET $res = UPDATE type::record($parts.id) MERGE $parts.rest RETURN AFTER;

	RETURN $res;
} PERMISSIONS WHERE $auth;

DEFINE FUNCTION OVERWRITE fn::createListingsRecord($data: object) {
	LET $parsed = function($data) {
				const { tags, owner, ...data} = arguments[0];

				const [table, id] = owner.split(":");
				data.owner = new Record(table, id);

				data.tags = tags.map(idStr => {
					const [table, id] = idStr.split(":");
					return new Record(table, ParsetInt(id) || id);
				});

				return data;
			};

	LET $res = CREATE listings:uuid() CONTENT $parsed RETURN AFTER;
	RETURN $res;
} PERMISSIONS WHERE $auth;