import React, { useEffect, useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaComments, FaPaperPlane, FaTimes } from 'react-icons/fa'
import './Chatbot.css'

// Lightweight knowledge and rules so the bot can answer broadly without external APIs
// Nutrition facts (simplified) derived from your Diet table for quick Q&A
const nutritionData = [
  { food: 'apple', carbs: 14, protein: 0.3, fat: 0.2, vitamins: ['C','A','K'], minerals: ['potassium'], water: 86, fiber: 2.4, calories: 52 },
  { food: 'banana', carbs: 23, protein: 1.1, fat: 0.3, vitamins: ['C','B6'], minerals: ['potassium','magnesium'], water: 75, fiber: 2.6, calories: 96 },
  { food: 'orange', carbs: 12, protein: 0.9, fat: 0.1, vitamins: ['C','A'], minerals: ['potassium','calcium'], water: 87, fiber: 2.4, calories: 47 },
  { food: 'strawberries', carbs: 8, protein: 0.8, fat: 0.3, vitamins: ['C','K'], minerals: ['manganese','potassium'], water: 91, fiber: 2.0, calories: 33 },
  { food: 'spinach', carbs: 3.6, protein: 2.9, fat: 0.4, vitamins: ['A','C','K','folate'], minerals: ['iron','calcium'], water: 91, fiber: 2.2, calories: 23 },
  { food: 'brown rice', carbs: 23, protein: 2.6, fat: 0.9, vitamins: ['B complex'], minerals: ['selenium','manganese'], water: 73, fiber: 1.8, calories: 123 },
  { food: 'oats', carbs: 66, protein: 17, fat: 8, vitamins: ['B complex'], minerals: ['manganese','phosphorus'], water: 10, fiber: 10.6, calories: 389 },
  { food: 'quinoa', carbs: 21, protein: 4.1, fat: 1.9, vitamins: ['folate','B complex'], minerals: ['manganese','iron'], water: 72, fiber: 2.8, calories: 120 },
  { food: 'egg', carbs: 0.6, protein: 13, fat: 11, vitamins: ['A','D','B2','B12'], minerals: ['phosphorus','selenium'], water: 75, fiber: 0, calories: 155 },
  { food: 'almonds', carbs: 22, protein: 21, fat: 49, vitamins: ['E','B2'], minerals: ['magnesium','manganese'], water: 4, fiber: 12.5, calories: 579 },
  { food: 'lentils', carbs: 20, protein: 9, fat: 0.4, vitamins: ['folate','thiamin'], minerals: ['iron','manganese'], water: 70, fiber: 8.9, calories: 116 },
  { food: 'salmon', carbs: 0, protein: 20, fat: 13, vitamins: ['D','B12','B6'], minerals: ['potassium','selenium'], water: 67, fiber: 0, calories: 208 },
]
const knowledge = [
  {
    q: 'how to lose fat quickly safely',
    a: 'Create a small calorie deficit (300–500 kcal/day), keep protein high (~1.6–2.2 g/kg), lift 2–4x/week, and walk daily. Sleep 7–9h and limit liquid calories.'
  },
  {
    q: 'build muscle workout plan beginner',
    a: 'Train full-body 3x/week: squat or leg press, hinge (RDL), push (bench/pushups), pull (row), core, plus 20 min brisk walk. Add weight or reps weekly.'
  },
  { q: 'best diet normal bmi', a: 'Balanced meals: 1/4 lean protein, 1/4 whole grains, 1/2 veggies + healthy fats. Protein ~1.6 g/kg/day, hydrate well.' },
  { q: 'how much water hydration', a: 'Aim ~30–35 ml/kg/day; more if it’s hot or training is intense. Clear/light-yellow urine is a simple check.' },
  { q: 'steps per day health', a: 'A practical target is 7k–10k steps/day for general health; pair with 2–3 resistance sessions weekly.' },
  { q: 'protein sources vegetarian', a: 'Greek yogurt, cottage cheese, milk, eggs (if ovo), tofu/tempeh, lentils, chickpeas, beans, seitan, pea/whey/soy protein.' },
  { q: 'sleep recovery muscle', a: 'Prioritize 7–9 hours, consistent schedule, dark/cool room. Poor sleep reduces recovery and appetite control.' },
  {q:'Nice job',a : 'Welcome , Remember me again!'},
  {q:'How are you?',a : 'I am fine, and you'},
  {q:'I am also fine.',a : 'Great! Now lets start conversation on the topic of fitness you ask me question related to fitness.'},
  {
    q: 'how to lose fat quickly safely',
    a: 'Create a small calorie deficit (300–500 kcal/day), keep protein high (~1.6–2.2 g/kg), lift 2–4x/week, and walk daily. Sleep 7–9h and limit liquid calories.'
  },
  {
    q: 'I ve stopped losing weight, how do I break a plateau?',
    a: 'Confirm your calorie intake is accurate for one week. If so, either decrease calories by 100–200 or increase daily activity (e.g., +2000 steps). Introduce one high-carb "refeed" day at maintenance calories per week. Assess and manage stress levels.'
  },
  {
    q: 'How can I lose fat without losing muscle?',
    a: 'Maintain a moderate calorie deficit (300-500 kcal/day), eat high protein (1.6-2.2 g/kg), and continue to lift weights consistently to signal your body to preserve muscle.'
  },
  {
    q: 'Do I need cardio for fat loss?',
    a: 'Cardio helps increase your calorie deficit but is not strictly necessary if diet and lifting are on point. Use it as a tool; 2-3 sessions of 20-30 mins/week is a good start.'
  },
  {
    q: 'What is the best exercise for losing belly fat?',
    a: 'You cannot spot-reduce fat. Lose overall body fat through a consistent calorie deficit, resistance training, and cardio. Crunches build ab muscles but do not burn the fat on top.'
  },
  {
    q: 'What is the most effective way to build muscle?',
    a: 'Maintain a slight calorie surplus (+250–500 kcal/day), set protein at ~1.6–2.2 g/kg, train with progressive overload 3–5x/week, focusing on the 6–12 rep range. Prioritize sleep (7–9h) for optimal recovery and growth.'
  },
  {
    q: 'Should I do full-body workouts or a body-part split?',
    a: 'Use full-body workouts if you train 2-3x/week for efficiency. Use a body-part split (e.g., upper/lower) if you train 4+ times/week to allow for more volume and recovery.'
  },
  {
    q: 'How much rest should I take between sets?',
    a: 'For muscle growth, rest 60-120 seconds. For pure strength, rest 3-5 minutes. For endurance, rest 30-60 seconds. Adjust based on the exercise and intensity.'
  },
  {
    q: 'How do I know if I\'m lifting heavy enough?',
    a: 'The last 1-2 reps of a set should be challenging but completed with good form. If you can easily perform more reps than your target, increase the weight to ensure progressive overload.'
  },
  {
    q: 'What should I eat before a workout?',
    a: '1–2 hours before, eat a meal with complex carbs (like oats or brown rice) for sustained energy and some protein. For a quick boost 30 minutes before, a simple carb like a banana is ideal.'
  },
  {
    q: 'What is the most important thing to eat after a workout?',
    a: 'Within 1–2 hours, consume a complete protein source (like whey protein, chicken, or eggs) to kickstart muscle repair and carbohydrates to replenish your energy (glycogen) stores.'
  },
  {
    q: 'How much water do I really need to drink?',
    a: 'Aim for a baseline of 3–4 liters per day. Increase this amount based on how much you sweat during workouts or if you are in a hot climate. Your urine should be a pale yellow color.'
  },
  {
    q: 'How can I control sugar cravings?',
    a: 'Eat regular, balanced meals high in protein and fiber to stay full. Stay hydrated, get enough sleep, and when a craving hits, try eating a piece of fruit first. Don’t completely forbid treats.'
  },
  {
    q: 'What is a simple formula for long-term health and fitness?',
    a: 'Engage in 150 mins of moderate cardio weekly, add 2 full-body strength sessions, and aim for 7-9h of sleep nightly. Make 80% of your diet whole foods (vegetables, fruits, lean protein) and limit alcohol and processed sugar.'
  },
  {
    q: 'What does an ideal workout week look like for a beginner?',
    a: 'Schedule 2–3 full-body resistance workouts on non-consecutive days (e.g., Mon/Wed/Fri). Focus on compound movements. On rest days, perform light activity like walking for 30–45 mins. Prioritize consistency and proper form over heavy weight.'
  },
  {
    q: 'Is creatine a safe supplement and how should I take it?',
    a: 'Yes, creatine monohydrate is one of the safest and most-studied supplements. Take 3–5g daily at any time. A "loading phase" is not necessary for it to be effective.'
  },
]

const cannedFaq = [
  { q: /\b(hello|hi|hey)\b/i, a: (name) => `Hey${name ? ` ${name}` : ''}! How can I help with your fitness today?` },
]

function tokenize(text) {
  return (text || '')
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(Boolean)
}

function jaccardSimilarity(aTokens, bTokens) {
  const a = new Set(aTokens)
  const b = new Set(bTokens)
  const intersection = [...a].filter(t => b.has(t)).length
  const union = new Set([...a, ...b]).size
  return union === 0 ? 0 : intersection / union
}

function inferTopicReply(text) {
  const t = (text || '').toLowerCase()
  const bmiMatch = t.match(/\b(?:bmi|body\s*mass)\b|\b(\d{2}\.\d|\d{2})\b/)
  // If user mentions a BMI number explicitly
  const num = t.match(/\b(\d{2}\.\d|\d{2})\b/)
  if (/\bbmi\b/.test(t) && num) {
    const value = parseFloat(num[1])
    if (!isNaN(value)) {
      const cat = value < 18.5 ? 'Underweight' : value < 25 ? 'Normal' : value < 30 ? 'Overweight' : 'Obese'
      return `For BMI ${value.toFixed(1)} (${cat}): focus on ${cat === 'Underweight' ? 'a 300–500 kcal surplus with protein' : cat === 'Normal' ? 'maintenance calories, balanced macros' : 'a 300–500 kcal deficit emphasizing protein and veggies'}. Want a sample diet or workout?`
    }
  }
  if (/diet|nutrition|meal|calorie|protein/.test(t)) {
    const cat = localStorage.getItem('lastBMICategory')
    if (cat === 'Underweight') return 'Calorie-dense whole foods and +300–500 kcal/day. Protein ~1.6–2.0 g/kg, 3–4 meals.'
    if (cat === 'Normal') return 'Balanced plate, protein at each meal, whole grains and veggies. Maintain activity and sleep.'
    if (cat === 'Overweight' || cat === 'Obese') return 'Modest deficit, prioritize protein and fiber, limit liquid calories and ultra-processed snacks.'
    return 'Balanced plate: 1/2 veggies, 1/4 protein, 1/4 whole grains, plus healthy fats. Hydrate well.'
  }
  if (/workout|exercise|gym|plan|training/.test(t)) {
    return 'Try full-body 3x/week (squat, hinge, push, pull, core) + daily walking. Progress by small weekly increases.'
  }
  if (/water|hydrate|hydration|drink/.test(t)) {
    return 'Target ~30–35 ml/kg/day. More in heat/training. Keep urine light-yellow; add electrolytes if sweating a lot.'
  }
  if (/sleep|recovery|rest/.test(t)) {
    return 'Sleep 7–9h, regular schedule, dark/cool room. Good sleep boosts fat loss, muscle gain, and adherence.'
  }
  // Nutrition Q&A: which food is high in X or contains Y
  if (/\b(calcium|iron|potassium|magnesium|manganese|protein|carb|carbs|fat|fiber|vitamin|vitamins|calories)\b/.test(t)) {
    const tokens = tokenize(t)
    // Detect intent like "which food has more X" or "high in X"
    const queryNutrient = tokens.find(tok => ['calcium','iron','potassium','magnesium','manganese','protein','carb','carbs','fat','fiber','vitamin','vitamins','calories'].includes(tok))
    if (queryNutrient) {
      const scored = nutritionData.map(item => {
        let score = 0
        const f = item
        const containsMineral = (min) => (f.minerals || []).some(m => m.includes(min))
        const containsVitamin = (vit) => (f.vitamins || []).some(v => v.toLowerCase().includes(vit))
        if (queryNutrient === 'protein') score = f.protein
        else if (queryNutrient === 'carb' || queryNutrient === 'carbs') score = f.carbs
        else if (queryNutrient === 'fat') score = f.fat
        else if (queryNutrient === 'fiber') score = f.fiber
        else if (queryNutrient === 'calories') score = f.calories
        else if (['calcium','iron','potassium','magnesium','manganese'].includes(queryNutrient)) score = containsMineral(queryNutrient) ? 1 : 0
        else if (queryNutrient === 'vitamin' || queryNutrient === 'vitamins') score = (f.vitamins || []).length
        return { item: f, score }
      }).sort((a,b) => b.score - a.score)
      const top = scored.filter(s => s.score > 0).slice(0, 5).map(s => s.item.food)
      if (top.length) return `High in ${queryNutrient}: ${top.join(', ')}.`
    }

    // If the user asked about a specific food
    const mentioned = nutritionData.find(n => t.includes(n.food))
    if (mentioned) {
      const n = mentioned
      return `${capitalize(n.food)} — per 100g approx: ${n.calories} kcal, ${n.carbs}g carbs, ${n.protein}g protein, ${n.fat}g fat, fiber ${n.fiber}g. Vitamins: ${(n.vitamins||[]).join('/')}. Minerals: ${(n.minerals||[]).join('/')}.`
    }
  }
  return null
}

function capitalize(s) { return s ? s.charAt(0).toUpperCase() + s.slice(1) : s }

export default function Chatbot({ username }) {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState(() => ([
    { role: 'bot', text: `Hi${username ? ` ${username}` : ''}! I’m your FitQuest coach. Ask me about diet, workouts, BMI, or hydration.` }
  ]))
  const [input, setInput] = useState('')
  const endRef = useRef(null)

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [messages, open])

  const handleSend = () => {
    const trimmed = input.trim()
    if (!trimmed) return
    const userMsg = { role: 'user', text: trimmed }
    setMessages(prev => [...prev, userMsg])
    setInput('')

    // 1) Exact/rule-based quick replies
    const rule = cannedFaq.find(f => f.q.test(trimmed))
    if (rule) {
      const botMsg = { role: 'bot', text: rule.a(username) }
      setTimeout(() => setMessages(prev => [...prev, botMsg]), 200)
      return
    }

    // 2) Knowledge similarity search
    const userTokens = tokenize(trimmed)
    let best = { score: 0, a: null }
    for (const item of knowledge) {
      const score = jaccardSimilarity(userTokens, tokenize(item.q))
      if (score > best.score) best = { score, a: item.a }
    }

    // 3) Heuristic topic inference
    const inferred = inferTopicReply(trimmed)

    const reply = best.score >= 0.25
      ? best.a
      : inferred || (() => {
          const lastBmi = parseFloat(localStorage.getItem('lastBMI') || '0')
          const cat = localStorage.getItem('lastBMICategory')
          const bmiLine = lastBmi ? ` Your last BMI is ${lastBmi.toFixed(1)}${cat ? ` (${cat})` : ''}.` : ''
          return `Here’s a general guide:${bmiLine} • Diet: prioritize protein, veggies, whole grains. • Training: full-body 2–4x/week plus daily steps. • Recovery: 7–9h sleep. Ask follow-ups like “sample diet” or “push day plan”.`
        })()

    const botMsg = { role: 'bot', text: reply }
    setTimeout(() => setMessages(prev => [...prev, botMsg]), 250)
  }

  return (
    <div className="chatbot-root">
      <motion.button 
        className="chatbot-launcher"
        onClick={() => setOpen(v => !v)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open chatbot"
      >
        {open ? <FaTimes /> : <FaComments />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div 
            className="chatbot-panel"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="chatbot-header">Coach Bot</div>
            <div className="chatbot-messages">
              {messages.map((m, i) => (
                <div key={i} className={`msg ${m.role}`}>{m.text}</div>
              ))}
              <div ref={endRef} />
            </div>
            <form className="chatbot-input" onSubmit={(e) => { e.preventDefault(); handleSend() }}>
              <input 
                type="text" 
                placeholder="Ask me anything…"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button type="submit" className="send"><FaPaperPlane /></button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}


