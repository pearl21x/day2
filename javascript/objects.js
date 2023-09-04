const darthVader = {
    allegiance: 'Empire',
    Weapon: 'Lightsabre',
    Sith: true
}

console.log(darthVader)
console.log(Object.keys(darthVader).length);

darthVader['children'] = 2;
darthVader['childNames'] = ['Luke', 'Leia']

console.log(darthVader['children'])
console.log(darthVader['childNames'])

for (const key in darthVader) {
    console.log("Key:", key, "Val:", darthVader[key]);

}

darthVader.allegiance ='Light side';
console.log(darthVader['allegiance'])
delete darthVader.children
for (const key in darthVader) {
    console.log("Key:", key, "Val:", darthVader[key]);

}
let{allegiance, weapon, sith, childNames} = darthVader;

console.log(darthVader);

console.log('weapon:', weapon);
