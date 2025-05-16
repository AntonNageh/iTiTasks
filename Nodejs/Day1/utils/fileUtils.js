import fs from 'fs';

export const readFile = (path) => {
    let data = fs.readFileSync(path);
    return JSON.parse(data.toString());
};

export const writeFile = (newData, path) => {
    fs.writeFileSync(path, JSON.stringify(newData, null, 2));
};
