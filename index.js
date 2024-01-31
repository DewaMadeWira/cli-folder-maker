import * as p from '@clack/prompts';
import color from 'picocolors';
import { select, text } from '@clack/prompts';
// import * as fs from 'node:fs';
import * as fs from 'fs';

// TODO
// - Add ASCII
// Deploy to npm
// check in the current folder
// Add spinner

async function main() {
    console.log(`
 +-+-+-+ +-+-+-+-+-+-+ +-+-+-+-+-+
 |C|L|I| |F|O|L|D|E|R| |M|A|K|E|R|
 +-+-+-+ +-+-+-+-+-+-+ +-+-+-+-+-+
    `);

    //     p.intro(
    //         `${color.bgGreen(
    //             color.(`
    //  +-+-+-+ +-+-+-+-+-+-+ +-+-+-+-+-+
    //  |C|L|I| |F|O|L|D|E|R| |M|A|K|E|R|
    //  +-+-+-+ +-+-+-+-+-+-+ +-+-+-+-+-+
    //     `)
    //         )}`
    //     );

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
