import OpenAI from "openai";
import { NextResponse } from "next/server";
export const runtime = "nodejs";
export async function POST(req:Request){
 try{
  if(!process.env.OPENAI_API_KEY)return NextResponse.json({error:"חסר OPENAI_API_KEY בהגדרות Vercel"}, {status:503});
  const body=await req.json();const messages=Array.isArray(body.messages)?body.messages.slice(-10):[];
  const client=new OpenAI({apiKey:process.env.OPENAI_API_KEY});
  const response=await client.chat.completions.create({
   model:process.env.OPENAI_MODEL||"gpt-4o-mini",
   messages:[{role:"system",content:`אתה מאמן כושר אישי דובר עברית, מעודד וזהיר. המשתמש בן 20, גובה 171 ס"מ, משקל 88 ק"ג, מתחיל, מתאמן 3 פעמים בשבוע עם מתח, מקבילים ומשקל גוף, ואוכל כשר. הוא במסלול שלב ${body.phase||1} מתוך 6. תן הוראות קצרות וברורות, הסבר טכניקה, חלופות למתחיל ומנוחות. אל תאבחן ואל תבטיח ירידה במשקל. אל תעודד אימון דרך כאב; במקרה של כאב חד, סחרחורת, קוצר נשימה חריג או מצב רפואי הפנה לעצירה ולהתייעצות רפואית. אל תיתן דיאטות קיצוניות או מינוני תוספים. ענה בעברית טבעית שמתאימה להקראה בקול.`},...messages]
  });
  return NextResponse.json({answer:response.choices[0]?.message?.content||"לא הצלחתי לנסח תשובה."});
 }catch(e){console.error(e);return NextResponse.json({error:"שגיאה בשירות המאמן"}, {status:500})}
}
