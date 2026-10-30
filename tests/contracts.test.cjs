const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const read = (p) => fs.readFileSync(path.join(__dirname,'..',p),'utf8');
test('launcher and desktop/mobile engines exist', () => {
 for (const p of ['index.html','racer-game.html','racer-mobile-preview.html','core/menu.js','core/sharing.js']) assert.ok(read(p).length > 100, p);
});
test('shared-set launcher and API contract remain present', () => {
 const s=read('index.html');
 for (const x of ['readStudentSetId','createSharingClient','BT_RACER_PING','BT_RACER_READY','BT_RACER_START','BT_RACER_START_FAILED','BT_RACER_MENU']) assert.ok(s.includes(x),x);
 assert.match(s, /boringteacher-vocabulary-api/);
});
test('desktop game validates vocabulary and retains input controls', () => {
 const s=read('racer-game.html');
 for (const x of ['BT_RACER_START','BT_RACER_STARTED','BT_RACER_START_FAILED','BT_RACER_READY','Space','arrowup','arrowleft','arrowright','touchFire','touchBoost']) assert.ok(s.includes(x),x);
 assert.match(s, /p\.length<5\|\|p\.length>200/);
});
test('production files do not reference test-only site', () => {
 for (const p of ['index.html','racer-game.html']) assert.ok(!read(p).includes('bt-word-racer-game-lab.pages.dev'));
});
