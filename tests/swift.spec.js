const { test, expect } = require('@playwright/test');

test.describe('Swift Translator - Full Verification Suite', () => {

    const testData = [
        // Positive Functional Tests 
        { id: 'Pos_Fun_0001', input: 'api bath kamu' },
        { id: 'Pos_Fun_0002', input: 'api paasal yamudha?' },
        { id: 'Pos_Fun_0003', input: 'heta paayayi ' },
        { id: 'Pos_Fun_0004', input: 'mama pothak kiyevvaa' },
        { id: 'Pos_Fun_0005', input: 'Mama raeta kaeva mama yanavaa nidhiyanna' },
        { id: 'Pos_Fun_0006', input: 'oyagee gedhara address eka mokadhdha?' },
        { id: 'Pos_Fun_0007', input: 'machine eka on karanna' },
        { id: 'Pos_Fun_0008', input: 'Api Zoo ekata yamu' },
        { id: 'Pos_Fun_0009', input: 'ohu mehee aave naene' },
        { id: 'Pos_Fun_0010', input: 'Mata rupiyal 100k dhenna' },
        { id: 'Pos_Fun_0011', input: 'Meeting eka ude 8 a.m patangannavaa' },
        { id: 'Pos_Fun_0012', input: 'ayyo! mokadha anee me?' },
        { id: 'Pos_Fun_0013', input: 'vaessa vuNath api yannama oone' },
        { id: 'Pos_Fun_0014', input: 'mama ehee yanne nae' },
        { id: 'Pos_Fun_0015', input: 'ovun adha enne nae' },
        { id: 'Pos_Fun_0016', input: 'vahaama meheta enna' },
        { id: 'Pos_Fun_0017', input: 'Zoom link eka Whatsapp karanna' },
        { id: 'Pos_Fun_0018', input: 'Adha mama campus giye nae mokadha mata asaniipa nisaa' },
        { id: 'Pos_Fun_0019', input: 'magee upandhinaya 2002.pebaravaari 19 vanadhaaya' },
        { id: 'Pos_Fun_0020', input: 'Jeesu pihitayi..!' },
        { id: 'Pos_Fun_0021', input: 'magee beheth tika genalla dhenne' },
        { id: 'Pos_Fun_0022', input: 'eeka Rs.1000k venavaa' },
        { id: 'Pos_Fun_0023', input: 'mamayi oyayi yamu ehe ' },
        { id: 'Pos_Fun_0024', input: 'mama yanavaa (nuvara) adha' },

        // Large Text
        { 
            id: 'Robustness_0001', 
            input: 'shrii lQQkaava indhiyaan saagarayei pihiti dhupathaki. mehi viviDha saqqskrRUthiin saha viviDha jaathiin vaasaya karathi. lQQkaavee ithihaasaya varSha dhahas gaanakata dhiva yayi. anuraadhapuraya saha polonnaruva vaeni puraaNa nagara mehi ithihasaya piLibaDHA saakShi dharayi. varthamaana kaalayeidha shrii lQQkaava sQQchaaraka udhyogaya nisaa lookayei prachalithava aetha. mehi thiyena lassana kadhukaraya saha sundhara vella sanchaarakayin aedhaganiyi. thavadha sinhala saha dhemaLa Bhaashaa mehi pradhaana Bhaashaa lesa Bhaavithaa karayi. mehi viviDha aagamika uthsava saha saqqskrRUthiin kriyaakaarakam raesak thibei. eya ratee ekamuthukama penvana hoDHA saadhakayaki' 
        },

        // Negative Functional Tests 
        { id: 'Neg_Fun_0001', input: 'mm gedhara yanvaa', expected: 'මම ගෙදර යනවා' },
        { id: 'Neg_Fun_0002', input: 'vidhyava', expected: 'විද්‍යාව' },
        { id: 'Neg_Fun_0003', input: 'vishvavidhyalaya', expected: 'විශ්වවිද්‍යාලය' },
        { id: 'Neg_Fun_0004', input: 'ado, moko wenne?', expected: 'අඩෝ, මොකෝ වෙන්නේ?' },
        { id: 'Neg_Fun_0005', input: 'bala', expected: 'බලන්න' },
        { id: 'Neg_Fun_0006', input: 'api pansal yanavaa', expected: 'අපි   පන්සල්   යනවා' },
        { id: 'Neg_Fun_0007', input: 'gnaanaya', expected: 'ඥානය' },
        { id: 'Neg_Fun_0008', input: 'MAMA GIYA', expected: 'මම ගියා' },
        { id: 'Neg_Fun_0009', input: 'kaaryalaaya', expected: 'කාර්යාලය' },
        { id: 'Neg_Fun_0010', input: 'sri lankaawa', expected: 'ශ්‍රී ලංකාව' },
        { id: 'Neg_Fun_0011', input: 'oxygn', expected: 'ඔක්සිජන්' }
    ];

    for (const tc of testData) {
        test(`${tc.id}`, async ({ page }) => {
            await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });

            const inputField = page.locator('textarea').first();
            const outputField = page.locator('textarea').last();

            await inputField.click();
            await inputField.clear();

            if (tc.input.length > 100) {
                await inputField.fill(tc.input);
            } else {
                await inputField.pressSequentially(tc.input, { delay: 60 });
            }
            await page.keyboard.press(' '); 

           
            await page.waitForTimeout(3000); 

            const actualOutput = await outputField.inputValue();
            console.log(`LOG - ${tc.id}: Input: ${tc.input} | Actual: ${actualOutput} | Expected: ${tc.expected}`);

            // Logic: Expected != Actual => Fail the test
            // Negative cases have expected defined to validate against
            expect(actualOutput.trim(), `Failing ${tc.id} because the system output does not match the correct Sinhala spelling.`).toBe(tc.expected);
        });
    }

    // UI Negative Test Case
    test('UI_Neg_0001: Clear Button on Empty Field', async ({ page }) => {
        await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
        
        const inputArea = page.locator('textarea').first();
        const clearBtn = page.getByRole('button', { name: /clear/i }).first();

        await expect(inputArea).toHaveValue('');
        await clearBtn.click();

        // Intentionally failing test: Although the system should be empty, we expect it to show "Error".
        // This will cause the test to fail and be highlighted in red.
        await expect(inputArea, 'UI did not show an error state on empty clear').toHaveValue('Error');
    });
});