-- Table tags
DELETE FROM tags;
CREATE tags CONTENT { id: type::thing('tags', 'design'), key: 'design', name: "Design" };
CREATE tags CONTENT { id: type::thing('tags', 'interior'), key: 'interior', name: "Interiør" };
CREATE tags CONTENT { id: type::thing('tags', 'webutvikling'), key: 'webutvikling', name: "Web-utvikling" };
CREATE tags CONTENT { id: type::thing('tags', 'vedsalg'), key: 'vedsalg', name: "Vedsalg" };
CREATE tags CONTENT { id: type::thing('tags', 'butikk'), key: 'butikk', name: "Butikk" };
CREATE tags CONTENT { id: type::thing('tags', 'servering'), key: 'servering', name: "Servering" };
CREATE tags CONTENT { id: type::thing('tags', 'overnatting'), key: 'overnatting', name: "Overnatting" };

-- Table users --

DELETE FROM users;
CREATE users CONTENT
{
    name: "Flemming",
    email: "gnimmelf@gmail.com"
};

LET $ownerRecord = (SELECT id FROM users WHERE email = 'gnimmelf@gmail.com')[0];

-- Table listings
DELETE FROM listings;
CREATE listings CONTENT
{
    "owner": <record<users>>$ownerRecord.id,
    "address": "Hurdalsjøen 45",
    "description": "En koselig kafé ved innsjøen som tilbyr lokalt brent kaffe og hjemmebakte bakverk.",
    "email": "post@hurdalcafe.no",
    "isActive": true,
    "links": [
        { "href": "https://facebook.com/hurdalcafe" }
    ],
    "muncipiality": "Hurdal",
    "phone": "+47 22 33 44 55",
    "tags": [tags:servering],
    "title": "Hurdal Café",
    "zip": "2090"
};
CREATE listings CONTENT
{
    "owner": <record<users>>$ownerRecord.id,
    "address": "Skogveien 12",
    "description": "En familieeid butikk for friluftsutstyr som spesialiserer seg på turlangs- og campingutstyr.",
    "email": "support@skogutstyr.no",
    "isActive": true,
    "links": [
        { "href": "https://skogutstyr.no" },
        { "href": "https://instagram.no/skogutstyr" }
    ],
    "muncipiality": "Hurdal",
    "phone": "+47 98 76 54 32",
    "tags": [tags:butikk],
    "title": "Skogutstyr Hurdal",
    "zip": "2090"
};
CREATE listings CONTENT
{
    "owner": <record<users>>$ownerRecord.id,
    "address": "Fjellveien 7",
    "description": "En sjarmerende fjellhytte som tilbyr koselige rom og spektakulær utsikt over Hurdalsjøen.",
    "email": "booking@hurdalfjell.no",
    "isActive": true,
    "links": [
        { "href": "https://hurdalfjell.no" },
        { "href": "https://facebook.no/hurdalfjell" }
    ],
    "muncipiality": "Hurdal",
    "phone": "+47 12 34 56 78",
    "tags": [tags:servering, tags:overnatting],
    "title": "Hurdalfjell Lodge",
    "zip": "2090"
}