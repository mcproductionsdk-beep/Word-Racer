# Word Racer Core migration — baseline audit

Date: 2026-10-20
Status: AUDIT / EXTRACTION NOT YET VERIFIED
Production is protected; no changes to main.

## Frozen baseline
- Repository: mcproductionsdk-beep/Word-Racer
- Branch: main (snapshot branch: core-migration-preview)
- Canonical path: index.html
- Original index.html blob: f443447777c63009e85d23b637f72afaf5fb8e44
- Original source length: 41,103 characters
- Source title: Word Racer Pixel V2.4
- Public URL: https://boringteacher.com/word-racer/

## Reference implementation
- Repository: mcproductionsdk-beep/Word-Snake
- Production release commit: b874336f75bbe400e83d952120b5cd9ae1b804a2
- Shell: index.html; gameplay engine: snake-game.html
- Core modules: core/menu.js, vocabulary.js, languages.js, sharing.js, voice.js, warehouse-categories.js; styles/menu.css
- Core assets are currently copied into individual game repositories, NOT centrally synchronized.

## Ownership classification — initial
CORE-OWNED (remove or disconnect from gameplay engine after full dependency audit): menu/studentIntro; language/category selectors; words/preview/swap; teacher sharing controls; parse/preview/cats/loadCat; createStudentLink/copyStudentLink/normalizeLoadedPairs/loadStudentSet; loadVoices/voiceFor/updateVoiceCheck/stopPronunciation/speak (replace with Core speech request).
GAME-OWNED (preserve): canvas drawing; racer car controls; collision, firing, boost/acceleration, target spawning, scoring, lives, progress, HUD; pause/restart/menu; sound effects, sound toggle; touch controls; overlays; frame loop and canvas resize.
SHARED BOUNDARY: vocabulary pair orientation, build/next/start, correct-answer speech trigger, game lifecycle, language state, game-owned DOM dependencies. Audit before removal; do not delete contiguous code blocks without inspecting intervening declarations.

## Required gates
1. Map all DOM IDs, declarations, references, handlers and CSS ownership. Resolve unknown dependencies.
2. Create stripped gameplay-only candidate. Static check and play with fixed vocabulary BEFORE Core integration.
3. Connect Core through explicit validated vocabulary adapter and READY/START handshake. Prevent duplicate loops/listeners.
4. Host isolated preview, verify teacher/student sharing, Spanish/German/Danish pronunciation, driving, boost, fire, collisions, scoring, pause, restart, mobile controls, invalid link recovery.
5. User approves exact candidate before production changes. Record rollback and verify both GitHub Pages and boringteacher.com after promotion.

## Evidence status
- Original production file: RETRIEVED.
- Word Snake reference: RETRIEVED.
- Branch: CREATED.
- Full dependency map: PENDING.
- Stripped engine: NOT YET BUILT OR TESTED.
- Core integration: NOT STARTED.
- Hosted preview: NOT YET AVAILABLE.
- Production impact: NONE.
