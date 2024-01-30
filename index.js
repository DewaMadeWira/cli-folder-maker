import * as p from '@clack/prompts';
import color from 'picocolors';
import { select, text } from '@clack/prompts';
// import * as fs from 'node:fs';
import * as fs from 'fs';

// D:\Code\Web Development\Misc
async function main() {
    p.intro(`${color.bgGreen(color.white('pls help'))}`);

    // const directory = await text({
    //     message: 'What is your directory you want',
    //     placeholder: 'Not sure',
    //     initialValue: '42',
    //     validate(value) {
    //         if (value.length === 0) return `Value is required!`;
    //     },
    // });
    const formatDirectory = directory.replace(/\\/g, '/');

    const projectType = await select({
        message: 'Create A folder',
        options: [
            { value: 'Yes', label: 'Yes' },
            { value: 'No', label: 'No', hint: 'oh no' },
        ],
    });

    const newFolder = await text({
        message: 'Create new folder',
        placeholder: 'Not sure',
        initialValue: 'Kadal',
        validate(value) {
            if (value.length === 0) return `Value is required!`;
        },
    });

    const folderName = `${formatDirectory}/${newFolder}`;
    if (projectType == 'No') return;
    try {
        if (!fs.existsSync(folderName)) {
            fs.mkdirSync(folderName);
        }
    } catch (err) {
        console.error(err);
    }
    // console.log(projectType);
}
main();
