import React, { useRef, useState, useEffect } from 'react'
import HTMLFlipBook from 'react-pageflip'
import './StoryBook.css'

const BASE_WIDTH = 380
const BASE_HEIGHT = 550
const SIDE_MARGIN = 40

function getBookSize() {
  const width = Math.round(Math.min(BASE_WIDTH, window.innerWidth - SIDE_MARGIN))
  const height = Math.round(width * (BASE_HEIGHT / BASE_WIDTH))
  return { width, height }
}

export default function StoryBook({ onBack }) {
  const bookRef = useRef()
  const [{ width, height }, setSize] = useState(getBookSize)

  useEffect(() => {
    const onResize = () => setSize(getBookSize())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <div className="storybook-body">
      {/* כפתור חזרה לצ'אט */}
      <button className="back-btn" onClick={onBack}>
        💬 חזרה לצ'אט
      </button>

      <div className="container">
        {/* אלמנט הספר */}
        <div id="book-container">
          <HTMLFlipBook
            width={width}
            height={height}
            size="fixed"
            maxShadowOpacity={0.5}
            showCover={true}
            mobileScrollSupport={false}
            ref={bookRef}
            className="flip-book"
          >
            {/* כריכה */}
            <div className="page page-cover" data-density="hard">
              <div className="page-wrapper">
                <h1>הסיפור שלנו</h1>
                <div className="decorative-line"></div>
                <p>מיה & אבירן</p>
              </div>
            </div>

            {/* עמוד 1 */}
            <div className="page">
              <div className="page-wrapper">
                <div className="page-content">
                  <div className="chapter-title">פרק ראשון: איך הכל התחיל? אבל באמת</div>
                  <p>הכל התחיל בשיחת טלפון. אני הייתי באותו הזמן במסעדה ביוון עם המשפחה שלי, רקדנו, שתינו, אכלנו, ופתאום אבא שלי מגיע עם הטלפון ביד ואומר לי ״אבירן יש פה מישהי שרוצה לדבר איתך״. אני מסתכל על הטלפון, וזאת שיחת וידאו מיוסי חיון, אבל בתמונה אני בכלל רואה בחורה עם כובע ורוד. זה בטוח לא יוסי.</p>
                  <p>הם היו בסירה של יוסי לא שמעתי כלום, לא היה לי מושג מי זאת, ובעיקר היה מאוד מביך. זאת הייתה שיחה בין שני אנשים שלא שומעים אחד את השנייה, ולא מבינים למה הם מדברים.</p>
                </div>
                <div className="page-footer">1</div>
              </div>
            </div>

            {/* עמוד 2 */}
            <div className="page">
              <div className="page-wrapper">
                <div className="page-content">
                  <p>זה הרגיש כמו זוג הורים שהולכים לפארק עם הילד שלהם, רואים ילד אחר באותו גיל ואומרים להם: ״הנה, הוא ילד בגיל שלך. לכו תשחקו״.</p>
                  <p>״היא אומרת שהיא משרתת איתך בבסיס״, יוסי אמר, ואני כיווצתי את העיניים לנסות לזהות מי זאת. זאת הייתה קצינת הרציפו״ת של הבסיס. באמת דיברנו קצת.  פעם אחרונה שדיברנו היה כמה שבועות לפני כן בדיון התנעה של יום כשירות כנפי. זה היה היום הראשון שלה בתפקיד והיא העבירה מצגת שמישהו אחר בנה, ואני דאגתי להעביר את כל הביקורת שלי בשלב ההתייחסויות.</p>
                  <p>אני המשכתי בחיים שלי כרגיל. והיא? לא יודע.</p>
                </div>
                <div className="page-footer">2</div>
              </div>
            </div>

            {/* עמוד 3 */}
            <div className="page">
              <div className="page-wrapper">
                <div className="page-content">
                  <div className="chapter-title">פרק שני: מה יהיה מחר?</div>
                  <p>בדרך חזור לארץ כבר הבנתי שכנראה אצטרך לנסוע לבסיס, בשונה ממה שחשבתי שיקרה. נפל טיל במג׳דל שמס, ויש אירוע גדול. זה פגע בדיוק במגרש כדורגל ויש כמה ילדים הרוגים.</p>
                  <p>לי בכלל היו תוכניות אחרות, תכננתי לחזור הביתה, לעשות איזה שנ״צ קטן ואפילו קבעתי לי דייט לערב. אבל תוכניות לחוד ומציאות לחוד.</p>
                  <p>נסעתי לטייסת, לבשתי את הסרבל, נכנסתי לחדר התדריכים, והבנתי - מתחילים מלחמה עם חיזבאללה.</p>
                </div>
                <div className="page-footer">3</div>
              </div>
            </div>

            {/* עמוד 4 */}
            <div className="page">
              <div className="page-wrapper">
                <div className="page-content">
                  <p>מהר מאוד שמתי את כובע הרציפו״ת והתחלתי לעבוד. השיחות בינינו היו בהתחלה רגילות. כשהמצב המבצעי התחמם, השיחות הפכו למאוד תכופות - כולם עזבו את הבסיס ורק אנחנו נשארנו. קצינת רציפו״ת אחת לקצין רציפו״ת אחד.</p>
                  <p>דיברנו הרבה, בהתחלה על עבודה, ואחר כך גם קצת מעבר. היא הייתה יפה, חייכנית, חכמה ומלאת שמחת חיים.</p>
                  <p>וככה זה המשיך. משיחה לשיחה. מסיבוב מפ״טים אחד לשני. בכל אופציה שהייתה לי לדבר איתה עשיתי את זה.</p>
                </div>
                <div className="page-footer">4</div>
              </div>
            </div>

            {/* עמוד 5 */}
            <div className="page">
              <div className="page-wrapper">
                <div className="page-content">
                  <p>אחרי כמה ימים בודדים זה כבר היה לי ברור. הייתי עם כהנא במפ״ט אבירן ואמרתי לו: ״שמע, נראה לי שאני הולך על זה״. והוא ענה לי ״תעדכן איך היה״.</p>
                  <p>דיברנו וקבענו שנשב. הבטחתי שאביא לה קפה, נשב ונדבר. נדבר על עבודה כמובן. אבל גם פה הדברים לא קרו לפי התוכנית והוזנקתי לטיסה. הלכתי אבל הבטחתי לה שאנחנו נשב ונשתה קפה ביחד יחד.</p>
                  <p>וככה באמת היה. יום למחרת התקשרתי אליה ואמרתי לה שאני עוד חייב לה קפה. בקטע מקצועי כמובן. הכנתי קפה נסעתי אליה.</p>
                </div>
                <div className="page-footer">5</div>
              </div>
            </div>

            {/* עמוד 6 */}
            <div className="page">
              <div className="page-wrapper">
                <div className="page-content">
                  <p>ישבנו בנוף 29, ישבנו ודיברנו, היה מאוד כיף. כל כך כיף עד שהיא לא שתתה אפילו לא שלוק מהקפה. טוב אולי זה לא קשור, אולי זה סתם כי הכנתי לקפה לא טעים.</p>
                  <p>לא כל כך ידעתי איך לגשת, ניסיתי להתקרב אבל הקפה שלה היה בינינו. קיוויתי שהיא תזיז אותו אבל היא לא עשתה את זה. בשלב מסוים כבר לא יכולתי לחכות, אזרתי אומץ ושאלתי אותה ״אנחנו מתכוונים להתנשק או מה?״. ואז זה קרה.</p>
                  <p>זאת הייתה תחושה פשוט נהדרת. מיליון פרפרים שפשוט עפים לי בתוך הגוף ועוד שנייה מתפרצים החוצה.</p>
                </div>
                <div className="page-footer">6</div>
              </div>
            </div>

            {/* עמוד 7 */}
            <div className="page">
              <div className="page-wrapper">
                <div className="page-content">
                  <p>החזרתי אותה למגורים. עצרתי. כל הפרפרים עוד היו מסביבנו. ברקע התנגן השיר ״מה יהיה מחר״ של פאר טסי.</p>
                  <p>שנינו חשבנו בדיוק על אותו דבר - זה השיר שמתאר בדיוק את הסיטואציה שלנו, וזה יהיה השיר שלנו.</p>
                  <br />
                  <div className="chapter-title">פרק 3: יש חגיגה</div>
                  <p>משם הקשר התפתח מהר מאוד. לגור ביחד בדירה שהיא רק שלנו, מפ״ט אבירן. עיצבנו אותו יפה. היה בו מיטה זוגית, מראות בצורת משושים, עציץ קטן, ואפילו מנורה מרחפת. וזה היה שלנו.</p>
                </div>
                <div className="page-footer">7</div>
              </div>
            </div>

            {/* עמוד 8 */}
            <div className="page">
              <div className="page-wrapper">
                <div className="page-content">
                  <p>ישנו ביחד כל לילה. דיברנו, צחקנו, צפינו בפרנדס, והיו עוד כמה דברים שאולי לא נכון שאני אכתוב בספר הזה.</p>
                  <p>כשהלחימה קצת נרגעה היא באה אליי לכרמיאל, וידעתי שהיא אוהבת סושי, אז לקחתי אותה לבימה בכרמיאל. זה היה אירוע קצת מוזר, היו שם קצת צעקות מהמטבח, ומישהי שרצתה שנגן עליה מאיזה מישהו שעובר ליד המסעדה.</p>
                  <p>״אני אפצה אותך, אני אקח אותך למקום הרבה יותר טוב״, אמרתי, ״יש להם את הסושי הכי טעים בעולם, ויש שם חבר כחול אז זה אוטומטית הופך את זה ל-30% טעים יותר״.</p>
                </div>
                <div className="page-footer">8</div>
              </div>
            </div>

            {/* עמוד 9 */}
            <div className="page">
              <div className="page-wrapper">
                <div className="page-content">
                  <p>נסענו הביתה ישבנו קצת על הספה ופתאום אבא שלי הגיע. היא הובכה נורא, אבל זה שלב שצריך לעבור.</p>
                  <p>אחרי כמה ימים נסענו לתל אביב. לקחתי אותה למקום שהבטחתי לה שאקח אותה - MOON. הזמנו את המנות הכי טובות, ובכל זאת היא לא אהבה. כששאלתי אותה ״למה את לא אוהבת?״ היא אמרה שהיא אוהבת סושי רגיל והסושי במון הוא מיוחד מדי.</p>
                  <p>טוב, אחרי הכל אין דבר כזה בן אדם מושלם. נראה לי שמצאתי מה הפגם שלה - לא אוהבת סושי טעים.</p>
                </div>
                <div className="page-footer">9</div>
              </div>
            </div>

            {/* עמוד 10 */}
            <div className="page">
              <div className="page-wrapper">
                <div className="page-content">
                  <p>ואיך אפשר לשכוח את המסיבה הראשונה שלנו ביחד, פעם ראשונה שאנחנו יוצאים לבלות וגם שותים אלכוהול. המסיבה הייתה של בנות החבוקבע של טייסת 105. הגענו ורקדנו, שרנו, התחבקנו ופתאום היא נעלמה.</p>
                  <p>לא הבנתי איפה היא. חששתי שהיא יושבת לבד ולא נהנת. הרמתי את הראש וראיתי אותה שם בתוך הבר מוזגת שוטים לאנשים ומרימה איתם לחיים, אנשים שהיא לא מכירה. פשוט אישה לחתונה.</p>
                </div>
                <div className="page-footer">10</div>
              </div>
            </div>

            {/* עמוד 11 */}
            <div className="page">
              <div className="page-wrapper">
                <div className="page-content">
                  <p>הערב המשיך, המשכנו לשתות, לרקוד ולצחוק, רק שלאחד מאיתנו, או יותר נכון אחת מאיתנו, פתאום התחיל להסתובב הראש. היא נשכבה על הרצפה ולא יכלה לזוז. ישבתי לידה והקשבתי לכל השטויות שיוצאות לה מהפה.</p>
                  <p>״למה אתה אוהב אותי?״, ״מה מיוחד בי?״ ועוד כל מיני שאלות שפשוט חזרו על עצמן שוב ושוב. היא הקיאה, ושוב פעם הקיאה, ושוב פעם הקיאה, ולא הצליחה לקום.</p>
                  <p>ניסיתי לקחת אותה למונית אבל היא לא הצליחה ללכת. כן, זה הרושם הראשוני שהיא עשתה עליי במסיבה הזאת. מבחינתי אני יוצא עם בחורה ששותה בלי סוף עד כדי אובדן יכולת ללכת.</p>
                </div>
                <div className="page-footer">11</div>
              </div>
            </div>

            {/* עמוד 12 */}
            <div className="page">
              <div className="page-wrapper">
                <div className="page-content">
                  <div className="chapter-title">פרק רביעי: התחלות חדשות</div>
                  <p>אחרי חצי שנה אני עברתי תפקיד, הפכתי להיות מפקד בבסיס ועברתי לגור בבאר שבע ונפגשנו רק בסופ״שים. זה הרגיש קצת כמו להיות חיילים בסדיר אבל התמודדנו עם זה. כמובן דאגנו גם לצאת למקומות, לטייל, לנסוע לאילת וליערות הכרמל.</p>
                  <p>אני לא היחיד שהתחיל דברים חדשים בזמן הזה, גם היא השתחררה והתחילה ללמוד לפסיכומטרי כדי להגשים את החלום שלה - להיות אדריכלית. למדה תוך כדי עשתה מילואים, קורס לקראת המבחנים באדריכלות, וקורס פסיכומטרי.</p>
                  <p>ולמרות המרחק אהבה נשארה גדולה.</p>
                </div>
                <div className="page-footer">12</div>
              </div>
            </div>

            {/* עמוד 13 */}
            <div className="page">
              <div className="page-wrapper">
                <div className="page-content">
                  <div className="chapter-title">פרק חמישי: פרק חדש</div>
                  <p>המשכנו בחיינו, אני עברתי לטייסת והתחלתי להיות מפקד קורס, והיא המשיכה במילואים והמשיכה לקדם את עצמה לעבר החלום שלה להיות אדריכלית.</p>
                  <p>היא ממלאת את מקומה של מפקדת הגף שיצאה לחופשת לידה. והיא, כלומר אנחנו, קיבלנו חדר קטן ב-BOQ, שבו התגוררנו ביחד במהלך התקופה. חדר קטן אבל יש בו הכל. רק חסרות בו מראות קטנות בצורת משושה.</p>
                  <p>החלטנו לקחת את הזוגיות שלנו צעד אחד נוסף. עשינו ארוחות משפחתיות יחד, הזמנו כרטיס טיסה לחודש ליפן, וחתמנו על דירה בחיפה.</p>
                </div>
                <div className="page-footer">13</div>
              </div>
            </div>

            {/* עמוד 14 */}
            <div className="page">
              <div className="page-wrapper">
                <div className="page-content">
                  <div className="chapter-title">פרק שישי: מה יהיה מחר?</div>
                  <p>עכשיו אנחנו גרים יחד, וזה הדבר הכי טוב שקרה לי!</p>
                  <p>חווינו בזמן הזה אינספור חוויות - ...</p>
                  <br /><br />
                </div>
                <div className="page-footer">14</div>
              </div>
            </div>

            {/* כריכה אחורית */}
            <div className="page page-cover" data-density="hard">
              <div className="page-wrapper">
                <div className="end-page">
                  <h1>ההמשך יבוא...</h1>
                  <div className="decorative-line"></div>
                  <p>❤️</p>
                </div>
              </div>
            </div>
          </HTMLFlipBook>
        </div>

        {/* כפתורי ניווט */}
        <div className="controls">
          <button onClick={() => bookRef.current.pageFlip().flipPrev()}>
            &rarr; העמוד הקודם
          </button>
          <button onClick={() => bookRef.current.pageFlip().flipNext()}>
            העמוד הבא &larr;
          </button>
        </div>
      </div>
    </div>
  )
}