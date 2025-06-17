// 파일 읽기
import { readFile } from 'fs/promises';

const data = await readFile('hello.txt', 'utf-8');
console.log(data);

console.log("--- The last line ---");

// 파일 쓰기 
import { writeFile } from 'fs/promises';

await writeFile('out-await.txt', 'Hello, ESM Async!');
console.log('File written asynchronously.');

// 파일 유무 확인
import { access } from 'fs/promises';

try {
  await access('out-await.txt');
  console.log('File exists.');
} catch {
  console.log('File does not exist.');
}

// 파일 삭제 
import { unlink } from 'fs/promises';

await unlink('out-await.txt');
console.log('File deleted asynchronously.');

// 경로 추출
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__filename, __dirname);

const filePath = path.join(__dirname, 'hello.txt');
console.log(filePath);

// 폴더 내 파일 확인
import { readdir } from 'fs/promises';

async function listFiles(directory) {
  try {
    const files = await readdir(directory);
    console.log('Files in directory:', files);
  } catch (error) {
    console.error('Error reading directory:', error);
  }
}

await listFiles('./src');

// 특정 파일의 상세정보 추출
import { stat } from 'fs/promises';

async function getFileInfo(filePath) {
  try {
    const info = await stat(filePath);
    console.log('File Info:', info);
    console.log('Is file:', info.isFile());
    console.log('Is directory:', info.isDirectory());
  } catch (error) {
    console.error('Error getting file info:', error);
  }
}

await getFileInfo('./hello.txt');

// 파일 상세정보 추출 활용
import { readdir, stat } from 'fs/promises'
import { join } from 'path'

async function listDirContents(directory) {
  try {
    const entries = await readdir(directory)

    for (const entry of entries) {
      const fullPath = join(directory, entry)
      const entryStat = await stat(fullPath)

      console.log(
        (entryStat.isDirectory() ? '🗂️ ' : '📄')
        + ' ' + entry)
    }
  } catch (error) {
    console.error('Error reading directory:', error)
  }
}

listDirContents('./src');

// 폴더 생성
import { mkdir } from 'fs/promises';

async function createFolder(directory) {
  try {
    await mkdir(directory, { recursive: true });
    console.log(`Folder created: ${directory}`);
  } catch (error) {
    console.error('Error creating folder:', error);
  }
}

await createFolder('./backup/logs');

// 경로 변경
import { rename } from 'fs/promises';

async function moveFile(oldPath, newPath) {
  try {
    await rename(oldPath, newPath);
    console.log(`Moved: ${oldPath} ➝ ${newPath}`);
  } catch (error) {
    console.error('Error moving file:', error);
  }
}

await moveFile(
  './world.txt',
  './backup/world.txt'
);

// 파일 복사
import { copyFile } from 'fs/promises';

async function copyFileExample(src, dest) {
  try {
    await copyFile(src, dest);
    console.log(`Copied: ${src} ➝ ${dest}`);
  } catch (error) {
    console.error('Error copying file:', error);
  }
}

await copyFileExample(
  './backup/world.txt',
  './hello.txt'
);

// 폴더 지우기
import { rmdir, rm } from 'fs/promises';

await rmdir('./src/empty');
console.log('✅ ./src/empty folder deleted.');

await rm('./src/txts', { recursive: true });
console.log('✅ ./src/txts folder and its contents deleted.');

// 권한 변경
import { chmod } from 'fs/promises';

async function changePermissions(filePath, mode) {
  try {
    await chmod(filePath, mode);
    console.log(`permissions of ${filePath} to ${mode}`);
  } catch (error) {
    console.error('Error changing permissions:', error);
  }
}

await changePermissions('./hello.txt', 0o644);

// 파일 크기 변경
import { truncate } from 'fs/promises';

async function truncateFile(filePath, size) {
  try {
    await truncate(filePath, size);
    console.log(`Truncated ${filePath} to ${size} bytes`);
  } catch (error) {
    console.error('Error truncating file:', error);
  }
}

await truncateFile('./src/lorem-ipsum.txt', 10);

// 파일의 접근 시간과 변경 시간 변경
import { utimes } from 'fs/promises';

async function updateTimestamps(filePath, atime, mtime) {
  try {
    await utimes(filePath, atime, mtime);
    console.log(`Updated timestamps of ${filePath}`);
  } catch (error) {
    console.error('Error updating timestamps:', error);
  }
}

const newTime = new Date(2025, 0, 1);
await updateTimestamps('./hello.txt', newTime, newTime);