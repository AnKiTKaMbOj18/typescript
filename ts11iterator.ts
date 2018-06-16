let pets = new Set(["cat", "dog", "cow"]);
pets["species"] = "mammal";

for (let pet in pets) {
    console.log(pet);
}
for (let pet of pets) {
    console.log(pet);
}