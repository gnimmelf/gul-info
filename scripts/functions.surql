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