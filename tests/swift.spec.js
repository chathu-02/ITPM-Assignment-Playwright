const { test, expect } = require('@playwright/test');


test.describe('Swift Translator - Full Functional Suite (IT23821490)', () => {

    test.beforeEach(async ({ page }) => {
        
        await page.goto('https://www.swifttranslator.com/', { 
            waitUntil: 'networkidle' 
        });
    });

    /**
     * Helper function to execute translation and verify result
     */
    async function verifyTranslation(page, singlishText, expectedSinhala) {
        const input = page.getByPlaceholder('Input Your Singlish Text Here.');
        await input.fill(singlishText);
        await page.keyboard.press('Space');
        
        
        const outputContainer = page.locator('#result-area, body'); 
        await expect(outputContainer).toContainText(expectedSinhala);
    }

    // --- POSITIVE FUNCTIONAL TESTS ---

    test('TC_01: Pos_Fun_0001 - Basic Statement', async ({ page }) => {
        await verifyTranslation(page, 'api bath kamu', 'අපි බත් කමු');
    });

    test('TC_02: Pos_Fun_0002 - Question Sentence', async ({ page }) => {
        await verifyTranslation(page, 'api paasal yamudha?', 'අපි පාසල් යමුද?');
    });

    test('TC_03: Pos_Fun_0003 - Future Tense Statement', async ({ page }) => {
        await verifyTranslation(page, 'heta paayayi', 'හෙට පායයි');
    });

    test('TC_04: Pos_Fun_0004 - ', async ({ page }) => {
        await verifyTranslation(page, 'mama pothak kiyevvaa', 'මම පොතක් කියෙව්වා');
    });

    test('TC_05: Pos_Fun_0005 - compound', async ({ page }) => {
        await verifyTranslation(page, 'Mama raeta kaeva mama yanavaa nidhiyanna', 'මම රැට කැව මම යනවා නිදියන්න');
    });

    test('TC_06: Pos_Fun_0006 ', async ({ page }) => {
        await verifyTranslation(page, 'oyagee gedhara address eka  mokadhdha?', 'ඔයගේ ගෙදර address එක  මොකද්ද?');
    });

    test('TC_07: Pos_Fun_0007 ', async ({ page }) => {
        await verifyTranslation(page, 'machine eka on karanna ', 'machine එක on කරන්න');
    });

    test('TC_08: Pos_Fun_0008 - Place Name', async ({ page }) => {
        await verifyTranslation(page, 'ohu mehee aave naene', 'ඔහු මෙහේ ආවෙ නැනෙ');
    });

    test('TC_09: Pos_Fun_0009', async ({ page }) => {
        await verifyTranslation(page, 'Api Zoo ekata  yamu', 'අපි Zoo එකට යමු');
    });

    test('TC_10: Pos_Fun_0010', async ({ page }) => {
        await verifyTranslation(page, 'Mata rupiyal 100k dhenna', 'මට රුපියල් 100ක් දෙන්න');
    });

    test('TC_11: Pos_Fun_0011 ', async ({ page }) => {
        await verifyTranslation(page, 'Meeting eka udhee 8 a.m patangannavaa', 'Meeting එක උදේ 8 a.m පටන්ගන්නවා');
    });

    test('TC_12: Pos_Fun_0012 ', async ({ page }) => {
        await verifyTranslation(page, 'ayyo! mokadha anee me?', 'අය්යො! මොකද අනේ මෙ?');
    });

    test('TC_13: Pos_Fun_0013 ', async ({ page }) => {
        await verifyTranslation(page, 'vaessa vuNath api yannama oone', 'වැස්ස වුණත් අපි යන්නම ඕනෙ');
    });

    test('TC_14: Pos_Fun_0014 - Rakaransaya Translation', async ({ page }) => {
        await verifyTranslation(page, 'mama ehee yanne nae', 'මම එහේ යන්නෙ නැ');
    });

    test('TC_15: Pos_Fun_0015 ', async ({ page }) => {
        await verifyTranslation(page, 'ovun adha enne nae', 'ඔවුන් අද එන්නෙ නැ');
    });

    test('TC_16: Pos_Fun_0016 ', async ({ page }) => {
        await verifyTranslation(page, 'vahaama meheta enna', 'වහාම මෙහෙට එන්න');
    });

    test('TC_17: Pos_Fun_0017 - Mahaprana Letters', async ({ page }) => {
        await verifyTranslation(page, 'Zoom link eka Whatsapp karanna', 'Zoom link එක Whatsapp කරන්න');
    });

    test('TC_18: Pos_Fun_0018 ', async ({ page }) => {
        await verifyTranslation(page, 'Adha mama campus giye nae mokadha mata asaniipa nisaa', 'අද මම campus ගියෙ නැ මොකද මට අසනීප නිසා');
    });

    test('TC_19: Pos_Fun_0019', async ({ page }) => {
        await verifyTranslation(page, 'magee upandhinaya 2002.pebaravaari 19 vanadhaaya', 'මගේ උපන්දිනය 2002.පෙබරවාරි 19 වනදාය');
    });

    test('TC_20: Pos_Fun_0020 ', async ({ page }) => {
        await verifyTranslation(page, 'Jeesu pihitayi', 'ඦේසු පිහිටයි');
    });

    test('TC_21: Pos_Fun_0021 ', async ({ page }) => {
        await verifyTranslation(page, 'magee beheth tika genalla dhenne', 'මගේ බෙහෙත් ටික ගෙනල්ල දෙන්න');
    });

    test('TC_22: Pos_Fun_0022 ', async ({ page }) => {
        await verifyTranslation(page, 'eeka Rs.1000k venavaa', 'ඒක Rs.1000ක් වෙනවා');
    });

    test('TC_23: Pos_Fun_0023 ', async ({ page }) => {
        await verifyTranslation(page, 'shrii lQQkaava indhiyaan saagarayei pihiti dhupathaki. mehi viviDha saqqskrRUthiin saha viviDha jaathiin vaasaya karathi. lQQkaavee ithihaasaya varSha dhahas gaanakata  dhiva yayi. anuraadhapuraya saha polonnaruva vaeni puraaNa nagara mehi ithihasaya piLibaDHA saakShi dharayi. varthamaana kaalayeidha shrii lQQkaava sQQchaaraka udhyogaya nisaa lookayei prachalithava aetha. mehi thiyena lassana kadhukaraya saha sundhara vella sanchaarakayin aedhaganiyi. thavadha sinhala saha dhemaLa Bhaashaa mehi pradhaana Bhaashaa lesa Bhaavithaa karayi. mehi viviDha aagamika uthsava saha saqqskrRUthiin kriyaakaarakam raesak thibei. eya ratee ekamuthukama penvana hoDHA saadhakayaki dawasak', 'ශ්‍රී ලංකාව ඉන්දියාන් සාගරයේ පිහිටි දුපතකි. මෙහි විවිධ සංස්ක්‍රෘතීන් සහ විවිධ ජාතීන් වාසය කරති. ලංකාවේ ඉතිහාසය වර්ෂ දහස් ගානකට  දිව යයි. අනුරාදපුරය සහ පොලොන්නරුව වැනි පුරාණ නගර මෙහි ඉතිහසය පිළිබඳ සාක්ෂි දරයි. වර්තමාන කාලයේද ශ්‍රී ලංකාව සංචාරක උද්යොගය නිසා ලෝකයේ ප්‍රචලිතව ඇත. මෙහි තියෙන ලස්සන කදුකරය සහ සුන්දර වෙල්ල සන්චාරකයින් ඇදගනියි. තවද sinhala සහ දෙමළ භාශා මෙහි ප්‍රදාන භාශා ලෙස භාවිතා කරයි. මෙහි විවිධ ආගමික උත්සව සහ සංස්ක්‍රෘතීන් ක්‍රියාකාරකම් රැසක් තිබේ. එය රටේ එකමුතුකම පෙන්වන හොඳ සාදකයකි');
    });

    test('TC_24: Pos_Fun_0024 - ', async ({ page }) => {
        await verifyTranslation(page, 'mamayi oyayi yamu ehe', 'මමයි ඔයයි යමු එහෙ');
    });
    

    test('TC_25: Neg_Fun_0001  ', async ({ page }) => {
        const input = page.getByPlaceholder('Input Your Singlish Text Here.');
        await input.fill('mmgedharayanavaa');
        await page.keyboard.press('Space');
        await expect(page.locator('body')).toContainText('මම ගෙදර යනවා.');
    });

    test('TC_26: Neg_Fun_0002  ', async ({ page }) => {
        const input = page.getByPlaceholder('Input Your Singlish Text Here.');
       
        await input.fill('vidhyava');
        await page.keyboard.press('Space');
        await expect(page.locator('body')).toContainText('විද්‍යාව');
    });
    test('TC_27: Neg_Fun_0003  ', async ({ page }) => {
        const input = page.getByPlaceholder('Input Your Singlish Text Here.');
       
        await input.fill('vishvavidhyalaya');
        await page.keyboard.press('Space');
        await expect(page.locator('body')).toContainText('විශ්වවිද්‍යාලය');
    });
    test('TC_28: Neg_Fun_0004  ', async ({ page }) => {
        const input = page.getByPlaceholder('Input Your Singlish Text Here.');
        await input.fill('ado, moko wenne?');
        await page.keyboard.press('Space');
        await expect(page.locator('body')).toContainText('අඩෝ, මොකෝ වෙන්නේ?');
    });
    test('TC_29: Neg_Fun_0005  ', async ({ page }) => {
        const input = page.getByPlaceholder('Input Your Singlish Text Here.');
        await input.fill('bala');
        await page.keyboard.press('Space');
        await expect(page.locator('body')).toContainText('බාල');
    });
    test('TC_30: Neg_Fun_0006  ', async ({ page }) => {
        const input = page.getByPlaceholder('Input Your Singlish Text Here.');
        await input.fill('api        pansal             yanavaa.');
        await page.keyboard.press('Space');
        await expect(page.locator('body')).toContainText('අපි පන්සල් යනවා.');
    });
    test('TC_31: Neg_Fun_0007  ', async ({ page }) => {
        const input = page.getByPlaceholder('Input Your Singlish Text Here.');
        await input.fill('gnaanaya');
        await page.keyboard.press('Space');
        await expect(page.locator('body')).toContainText('ඥානය');
    });
    test('TC_32: Neg_Fun_0008  ', async ({ page }) => {
        const input = page.getByPlaceholder('Input Your Singlish Text Here.');
        await input.fill('MAMA GIYA');
        await page.keyboard.press('Space');
        await expect(page.locator('body')).toContainText('මම ගියා');
    });
    test('TC_33: Neg_Fun_0009  ', async ({ page }) => {
        const input = page.getByPlaceholder('Input Your Singlish Text Here.');
        await input.fill('kaaryalaaya');
        await page.keyboard.press('Space');
        await expect(page.locator('body')).toContainText('කාර්යාලය');
    });
    test('TC_34: Neg_Fun_00010  ', async ({ page }) => {
        const input = page.getByPlaceholder('Input Your Singlish Text Here.');
        await input.fill('oxygn');
        await page.keyboard.press('Space');
        await expect(page.locator('body')).toContainText('ඔක්සිජන්');
    });
    
    


});