export default defineContentScript({
  matches: ['https://www.tbank-online.com/terminal/*'],
  main() {
    console.log('[T-SafetyNet] Контент-скрипт успешно загружен в терминале Т-Банка.');
  },
});
