#!/usr/bin/env node


import { text, spinner } from '@clack/prompts';
import { setTimeout } from 'timers/promises';
import * as fs from 'fs';
import figlet from 'figlet';

// TODO
// - Add ASCII ✔
// - Add spinner ✔
// - Deploy to npm 
// - check in the current folder


async function main() {
    figlet.text(
        'CLI FOLDER MAKER',
        {
            font: 'Slant',
            horizontalLayout: 'default',
            verticalLayout: 'default',
            width: 100,
            whitespaceBreak: true,
        },
        function (err, data) {
            if (err) {
                console.log('Something went wrong...');
                console.dir(err);
                return;
            }
            console.log(data);
        }
    );
    await setTimeout(300);


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
        placeholder: 'Mobile,TKTI,SPK',
        initialValue: '',
        validate(value) {
            if (value.length === 0) return `Value is required!`;

        },
    });
    const formattedSubject = subject.split(',');

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
            
                fs.mkdirSync(
                    `${folderName}/${formattedSubject[i]}/${subFolder[j]}`
                );
                // }
            }
            for (let k = 0; k < tugasAndMateri; k++) {
              
                fs.mkdirSync(
                    `${folderName}/${formattedSubject[i]}/${
                        subFolder[0]
                    }/Pertemuan ${k + 1}`
                );
            }
            for (let l = 0; l < tugasAndMateri; l++) {
               
                fs.mkdirSync(
                    `${folderName}/${formattedSubject[i]}/${
                        subFolder[1]
                    }/Pertemuan ${l + 1}`
                );
            }
            for (let m = 0; m < quiz; m++) {
             
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
    const s = spinner();

    s.start(`Creating Folder..`);
    await setTimeout(500);
    s.stop('Folder created');

    // console.log();
}
main();
