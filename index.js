import * as p from '@clack/prompts';
import color from 'picocolors';
import { select, text } from '@clack/prompts';
// import * as fs from 'node:fs';
import * as fs from 'fs';


async function main() {
    p.intro(`${color.bgGreen(color.white('CLI FOLDER MAKER'))}`);
    //   / __\ / /   \_   \   / __\/___\/ /   /   \/__\/__\   /\/\    /_\    /\ /\ /__\/__\

    // console.log(`${color.bgGreen(color.white(''))}`);

    //     console.log(
    //         `%c
    //  _____  _     _____  ______ _____ _    ______ ___________  ___  ___  ___   _   __ ___________
    // /  __ \| |   |_   _| |  ___|  _  | |   |  _  \  ___| ___ \ |  \/  | / _ \ | | / /|  ___| ___ \
    // | /  \/| |     | |   | |_  | | | | |   | | | | |__ | |_/ / | .  . |/ /_\ \| |/ / | |__ | |_/ /
    // | |    | |     | |   |  _| | | | | |   | | | |  __||    /  | |\/| ||  _  ||    \ |  __||    /
    // | \__/\| |_____| |_  | |   \ \_/ / |___| |/ /| |___| |\ \  | |  | || | | || |\  \| |___| |\ \
    //  \____/\_____/\___/  \_|    \___/\_____/___/ \____/\_| \_| \_|  |_/\_| |_/\_| \_/\____/\_| \_|
    //  `,
    //         `font-family: monospace`
    //     );

    // const directory = await text({
    //     message: 'What is your directory you want',
    //     placeholder: 'Not sure',`
    //     initialValue: '42',
    //     validate(value) {
    //         if (value.length === 0) return `Value is required!`;
    //     },
    // });
    // const formatDirectory = directory.replace(/\\/g, '/');

    // const semester = await select({
    //     message: 'Create A folder',
    //     options: [
    //         { value: 'Yes', label: 'Yes' },
    //         { value: 'No', label: 'No', hint: 'oh no' },
    //     ],
    // });

    const semester = await text({
        message: 'Which semester are you in ?',
        placeholder: '5',
        initialValue: '5',
        validate(value) {
            if (isNaN(value)) return 'Value must be a number';
            if (value.length === 0) return `Value is required!`;
        },
    });

    const subject = await text({
        message: 'Insert your subject.',
        placeholder: 'ML,DS,MOBILE',
        initialValue: '',
        validate(value) {
            if (value.length === 0) return `Value is required!`;
            // if (!Number.isInteger(value)) return 'Value must be a number';
        },
    });

    const formattedSubject = subject.split(',');
    // console.log(formattedSubject);

    const folderName = `./Semester ${semester}`;
    const subFolder = [
        '1.Tugas',
        '2.Materi',
        '3.Quiz',
        '4.UTS',
        '5.UAS',
        '6.Lain-lain',
    ];
    const tugasAndMateri = 17;
    const quiz = 2;

    if (!fs.existsSync(folderName)) {
        fs.mkdirSync(folderName);
    }
    try {
        for (let i = 0; i < formattedSubject.length; i++) {
            if (!fs.existsSync(`${folderName}/${formattedSubject[i]}`)) {
                fs.mkdirSync(`${folderName}/${formattedSubject[i]}`);
            }
        }
        for (let i = 0; i < formattedSubject.length; i++) {
            for (let j = 0; j < subFolder.length; j++) {
                // if (
                //     !fs.existsSync(
                //         `${folderName}/${formattedSubject[i]}/${items}`
                //     )
                // ) {
                // fs.mkdirSync(
                //     `${folderName}/${formattedSubject[i]}/${subFolder[j]}`
                // );
                fs.mkdirSync(
                    `${folderName}/${formattedSubject[i]}/${subFolder[j]}`
                );
                // }
            }
            for (let k = 0; k < tugasAndMateri; k++) {
                // fs.mkdirSync(
                //     `${folderName}/${formattedSubject[i]}/${
                //         subFolder[0]
                //     }/Pertemuan ${i + 1}`
                // );
                fs.mkdirSync(
                    `${folderName}/${formattedSubject[i]}/${
                        subFolder[0]
                    }/Pertemuan ${k + 1}`
                );
            }
            for (let l = 0; l < tugasAndMateri; l++) {
                // fs.mkdirSync(
                //     `${folderName}/${formattedSubject[i]}/${
                //         subFolder[1]
                //     }/Pertemuan ${i + 1}`
                // );
                fs.mkdirSync(
                    `${folderName}/${formattedSubject[i]}/${
                        subFolder[1]
                    }/Pertemuan ${l + 1}`
                );
            }
            for (let m = 0; m < quiz; m++) {
                // fs.mkdirSync(
                //     `${folderName}/${formattedSubject[i]}/${
                //         subFolder[2]
                //     }/Pertemuan ${i + 1}`
                // );
                fs.mkdirSync(
                    `${folderName}/${formattedSubject[i]}/${
                        subFolder[2]
                    }/Quiz ${m + 1}`
                );
            }
        }
    } catch (error) {
        console.log('Folder already exist!!');
    }

    console.log('Folder created');
}
main();
