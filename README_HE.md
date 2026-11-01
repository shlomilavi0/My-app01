# My Fitness – פרויקט מוכן לפריסה ב-Vercel

## מה כלול
- אפליקציית Next.js בעברית ובעיצוב רספונסיבי.
- בחירת ימי אימון ושעה לכל יום.
- מאמן AI מבוסס OpenAI API, עם זיהוי דיבור בדפדפנים תומכים והקראת תשובות בעברית.
- Push notifications דרך Service Worker, Vercel Cron ו-Upstash Redis.
- מסלול התקדמות בן שישה שלבים וטיימר בסיסי.

## העלאה ל-Vercel
1. חלץ את קובץ ה-ZIP.
2. העלה את התיקייה ל-GitHub.
3. ב-Vercel בחר Add New → Project וחבר את מאגר GitHub.
4. Framework: Next.js. Build command ברירת מחדל `next build`.
5. הוסף את משתני הסביבה המפורטים ב-`.env.example`.
6. בצע Deploy.

## הגדרת שירותי צד שלישי
### OpenAI
צור API key בחשבון OpenAI והוסף `OPENAI_API_KEY`. ניתן לשנות `OPENAI_MODEL`.

### Upstash Redis
צור Redis database ב-Upstash והוסף `UPSTASH_REDIS_REST_URL` ו-`UPSTASH_REDIS_REST_TOKEN`.

### Web Push
צור זוג VAPID keys (למשל עם `npx web-push generate-vapid-keys`). הגדר:
- `VAPID_PUBLIC_KEY`
- `VAPID_PRIVATE_KEY`
- `VAPID_SUBJECT`
- `NEXT_PUBLIC_VAPID_PUBLIC_KEY` (אותו public key)
- `CRON_SECRET` כמחרוזת אקראית ארוכה.

לאחר הפריסה, בחר ימים ושעות באפליקציה ואשר התראות. בדוק שהדומיין נטען ב-HTTPS. Vercel Cron מוגדר לרוץ בכל דקה; תדירות Cron והזמינות תלויות בתוכנית Vercel הנוכחית. אם התוכנית אינה תומכת בדקה, שנה את התזמון לתדירות הנתמכת והשתמש בהתאמה בקוד.

## חשוב
- הפרויקט אינו נפרס אוטומטית לחשבון Vercel שלך; יש לחבר את GitHub ואת השירותים ולאשר הרשאות בעצמך.
- אל תשתף API keys בצ'אט ואל תכניס אותם לקוד. הגדר אותם רק ב-Project Settings → Environment Variables.
- זיהוי דיבור בדפדפן תלוי במכשיר/דפדפן ובדרך כלל דורש HTTPS. הקראת תשובות משתמשת ב-SpeechSynthesis המובנה.
- התראות Push דורשות הרשאת משתמש, VAPID, Redis ו-Cron פעילים. יש לבדוק התראות במכשיר היעד לאחר הפריסה.
- קוד זה הוא בסיס עובד להרחבה, לא אפליקציה רפואית. אימונים ותזונה כלליים בלבד; במקרה של כאב/בעיה רפואית יש לעצור ולהתייעץ עם איש מקצוע.
