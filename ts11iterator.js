var pets = new Set(["cat", "dog", "cow"]);
pets["species"] = "mammal";
for (var pet in pets) {
    console.log(pet);
}
for (var _i = 0, pets_1 = pets; _i < pets_1.length; _i++) {
    var pet = pets_1[_i];
    console.log(pet);
}
