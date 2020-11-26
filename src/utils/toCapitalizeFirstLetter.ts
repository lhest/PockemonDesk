
function toCapitalizeFirstLetter(name: string): string {
    let nameToCapit = `${name[0].toUpperCase()} ${name.slice(1)}`;
    return nameToCapit;
}

export default toCapitalizeFirstLetter;