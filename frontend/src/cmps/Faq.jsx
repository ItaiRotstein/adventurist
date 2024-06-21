const Faq = () => {
  return (
    <section id="faq" className="w-full max-w-4xl mx-auto pt-8 pb-4 px-4 bg-clr7">
      <h2 className="text-3xl text-center font-medium mb-6">שאלות נפוצות</h2>
      <hr className="border-t-2 border-clr8 w-[10%] mx-auto my-8" />
      <div className="collapse-group">

        <div className="collapse collapse-arrow border-b mb-3 rounded-none">
          <input type="checkbox" />
          <div className="collapse-title text-lg font-medium">
            איך מוצאים פעילות באתר?
          </div>
          <div className="collapse-content">
            <p>
              כדי למצוא פעילות באתר שלנו, יש לבחור את סוג הספורט האתגרי שמעניין אתכם מתוך הקטגוריות השונות, לעיין בעסקים והפעילויות המוצעות וליצור קשר ישירות עם הספקים דרך פרטי הקשר המופיעים בעמוד הפעילות.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow border-b mb-3 rounded-none">
          <input type="checkbox" />
          <div className="collapse-title text-lg font-medium">
            האם האתר מציע פעילויות לכל הרמות?
          </div>
          <div className="collapse-content">
            <p>
              כן, העסקים המופיעים באתר מציעים פעילויות לכל הרמות, החל ממתחילים ועד מקצוענים. מומלץ לבדוק את הפרטים המלאים של כל פעילות ולוודא שהיא מתאימה לרמת הניסיון שלכם.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow border-b mb-3 rounded-none">
          <input type="checkbox" />
          <div className="collapse-title text-lg font-medium">
            מה עלי להביא איתי לפעילות?
          </div>
          <div className="collapse-content">
            <p>
              הדרישות משתנות בהתאם לסוג הפעילות והספק. ברוב המקרים, עליכם להביא בגדים נוחים, נעליים מתאימות למזג האוויר ולפעילות, ומים. יש לבדוק את ההנחיות המפורטות שמספק העסק בעמוד הפעילות.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow border-b mb-3 rounded-none">
          <input type="checkbox" />
          <div className="collapse-title text-lg font-medium">
            מה קורה אם מזג האוויר אינו מתאים לפעילות?
          </div>
          <div className="collapse-content">
            <p>
              במקרה של מזג אוויר לא מתאים, יש לפנות ישירות לעסק המציע את הפעילות כדי לבדוק את האפשרויות. רוב הספקים מציעים מועד חלופי לפעילות או תנאים נוספים במקרה של ביטול.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow border-b mb-3 rounded-none">
          <input type="checkbox" />
          <div className="collapse-title text-lg font-medium">
            האם הפעילויות מתאימות לילדים?
          </div>
          <div className="collapse-content">
            <p>
              ישנם ספקים באתר המציעים פעילויות המתאימות לילדים ולמשפחות. יש לבדוק את הדרישות והגבלות הגיל בכל פעילות ולוודא שהיא מתאימה לילדים שלכם.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow border-b mb-3 rounded-none">
          <input type="checkbox" />
          <div className="collapse-title text-lg font-medium">
            האם אפשר להזמין פעילות לקבוצה גדולה או לאירוע מיוחד?
          </div>
          <div className="collapse-content">
            <p>
              כן, עסקים רבים מציעים חבילות מיוחדות לקבוצות גדולות ואירועים כמו ימי כיף לעובדים, מסיבות יום הולדת ואירועים מיוחדים נוספים. מומלץ ליצור קשר ישירות עם הספקים דרך פרטי הקשר המופיעים באתר כדי לקבל הצעת מחיר מותאמת אישית.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow border-b mb-3 rounded-none">
          <input type="checkbox" />
          <div className="collapse-title text-lg font-medium">
            איך יוצרים קשר עם העסק המציע את הפעילות?
          </div>
          <div className="collapse-content">
            <p>
              כל עסק המופיע באתר מספק פרטי קשר בעמוד הפעילות שלו. תוכלו ליצור קשר עם הספקים באמצעות הטלפון, המייל או דרך האתר שלהם.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow border-b mb-3 rounded-none">
          <input type="checkbox" />
          <div className="collapse-title text-lg font-medium">
            האם האתר גובה תשלום עבור השימוש בו?
          </div>
          <div className="collapse-content">
            <p>
              לא, השימוש באתר הוא חינמי. אנו רק מקשרים בין משתמשים לעסקים העוסקים בספורט אתגרי. כל התשלום על הפעילויות מתבצע ישירות מול הספקים.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Faq;
