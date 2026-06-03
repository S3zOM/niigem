"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  XCircle,
  Clock,
  Users,
  BookOpen,
  BarChart2,
  Search,
  Bell,
  Shield,
  Wifi,
  Database,
  Server,
  Monitor,
  Layers,
  AlertTriangle,
  DollarSign,
  Target,
  FileText,
  Zap,
  UserCheck,
  ClipboardList,
  Timer,
  TrendingUp,
} from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

const fadeLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5 },
};

const palettes = [
  {
    id: "light-blue",
    root: "bg-gradient-to-br from-sky-50 via-cyan-50 to-indigo-50 text-slate-900",
    card: "bg-white",
    subtle: "text-slate-600",
    accent: "from-blue-400 via-cyan-400 to-indigo-400",
    pillBg: "bg-white/80",
  },
  {
    id: "warm",
    root: "bg-gradient-to-br from-rose-50 via-orange-50 to-yellow-50 text-slate-900",
    card: "bg-white",
    subtle: "text-slate-600",
    accent: "from-rose-400 via-orange-400 to-yellow-400",
    pillBg: "bg-white/80",
  },
  {
    id: "mint",
    root: "bg-gradient-to-br from-emerald-50 via-emerald-100 to-lime-50 text-slate-900",
    card: "bg-white",
    subtle: "text-slate-600",
    accent: "from-emerald-400 via-teal-400 to-lime-400",
    pillBg: "bg-white/80",
  },
];

export default function AttendanceProposalWebsite() {
  const [idx, setIdx] = useState(0);
  const [showWelcome, setShowWelcome] = useState(false);
  const detailsRef = useRef(null);
  const p = palettes[idx % palettes.length];

  return (
    <div className={`min-h-screen ${p.root} p-6 font-sans`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        {/* Welcome modal (simple) */}
        {showWelcome && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/40" onClick={() => setShowWelcome(false)} />
            <div className="relative bg-white rounded-2xl p-6 max-w-md w-full shadow-lg">
              <h3 className="text-2xl font-bold mb-2">Тавтай морилно уу</h3>
              <p className="text-slate-700 mb-4">Тавтай морилоно — энэхүү систем нь сургуулийн ирцийг хялбар бөгөөд найдвартай бүртгэнэ.</p>
              <div className="flex justify-end">
                <Button variant="outline" className="mr-3" onClick={() => setShowWelcome(false)}>Хаах</Button>
                <Button onClick={() => { setShowWelcome(false); detailsRef.current?.scrollIntoView({ behavior: "smooth" }); }}>Дэлгэрэнгүй</Button>
              </div>
            </div>
          </div>
        )}
        <section className="flex justify-end mb-6">
          <Button variant="outline" className="rounded-full px-3 py-1 text-sm" onClick={() => setIdx(i => (i + 1) % palettes.length)}>
            Солих өнгө
          </Button>
        </section>

        {/* ─── HERO ─── */}
        <section className="text-center mb-20 pt-8">
          <motion.div {...fadeUp(0.1)} className={`inline-block mb-4 px-4 py-1 rounded-full ${p.pillBg} border border-slate-200 text-sm font-medium tracking-wider uppercase`}>
             Төсөл · 2026
          </motion.div>
          <motion.h1
            {...fadeUp(0.2)}
            className="text-4xl md:text-5xl font-bold mb-5 leading-tight"
          >
            Төслийн санал: {" "}
            <span className={`bg-gradient-to-r ${p.accent} bg-clip-text text-transparent`}>
              Сургуулийн ирцийн
            </span>
            <br />
            удирдлагын систем
          </motion.h1>
          <motion.p
            {...fadeUp(0.3)}
            className={`max-w-2xl mx-auto mb-3 text-lg leading-relaxed ${p.subtle}`}
          >
            Present / Absent систем — сургуулийн анги бүрийн ирцийг цахимаар
            бүртгэж, удирдах, дүн шинжилгээ хийх бүрэн шийдэл.
          </motion.p>
          <motion.p
            {...fadeUp(0.35)}
            className={`max-w-xl mx-auto mb-8 text-sm ${p.subtle}`}
          >
            Гараар бүртгэх ажлыг халж, бодит цагийн ирцийн мэдээллийг
            автоматаар цуглуулна.
          </motion.p>
          <motion.div {...fadeUp(0.45)} className="flex gap-4 justify-center flex-wrap">
            <Button
              className="rounded-2xl px-8 py-5 text-base bg-gradient-to-r from-blue-600 to-cyan-500 text-white"
              onClick={() => setShowWelcome(true)}
            >
              Тавтай морилно уу
            </Button>
            <Button
              variant="outline"
              className="rounded-2xl px-8 py-5 text-base border-slate-300 text-slate-800"
              onClick={() => detailsRef.current?.scrollIntoView({ behavior: "smooth" })}
            >
              Дэлгэрэнгүй үзэх ↓
            </Button>
          </motion.div>

          {/* floating stat pills */}
          <motion.div
            {...fadeUp(0.55)}
            className="mt-12 flex justify-center gap-6 flex-wrap"
          >
            {[
              { icon: "⏱️", label: "Хугацаа хэмнэнэ", val: "90%" },
              { icon: "❌", label: "Алдааг бууруулна", val: "~0%" },
              { icon: "📊", label: "Тайлан автомат", val: "100%" },
            ].map((s, i) => (
              <div
                key={i}
                className="bg-white/80 border border-slate-200 rounded-2xl px-6 py-3 text-center"
              >
                <div className="text-2xl mb-1">{s.icon}</div>
                <div className="text-xl font-bold">{s.val}</div>
                <div className="text-xs text-slate-500">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </section>

        

        {/* ─── CURRENT PROBLEM ─── */}
        <section className="mb-20">
          <motion.h2 {...fadeLeft} className="text-3xl font-bold mb-8">
            ⚠️ Одоогийн тулгамдсан асуудлууд
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: <Clock size={28} className="text-red-500" />, title: "Цаг хугацааны алдагдал", desc: "Багш нар бүр хичээл эхлэхэд гараар нэрийн жагсаалт нэрлэж, ирцийг тэмдэглэхэд 5–10 минут алддаг." },
              { icon: <AlertTriangle size={28} className="text-orange-400" />, title: "Алдаа, буруу бүртгэл", desc: "Цаасан бүртгэлд алдаа, засварлалт гардаг. Сурагч ирсэн мэт тэмдэглэгдэх, эсвэл байхгүй мэт буруу бичигдэх тохиолдол байна." },
              { icon: <FileText size={28} className="text-yellow-400" />, title: "Нэгдсэн систем алга", desc: "Анги тус бүрийн ирц тусдаа тэмдэглэл, дэвтэрт байдаг. Нэгдсэн дүн шинжилгээ хийх боломжгүй." },
              { icon: <Users size={28} className="text-purple-400" />, title: "Хоцрогсдыг хянах хэцүү", desc: "Хоцорч ирсэн сурагчдыг тусад нь бүртгэх, хянах системгүй байдаг тул статистик мэдээлэл бодит бус байна." },
            ].map((pItem, i) => (
              <motion.div key={i} {...fadeUp(i * 0.1)}>
                <Card className="bg-white border border-slate-200 rounded-2xl h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="mt-1">{pItem.icon}</div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">{pItem.title}</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">{pItem.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ─── SOLUTION ─── */}
        <section ref={detailsRef} className="mb-20">
          <motion.h2 {...fadeLeft} className="text-3xl font-bold mb-8">
            💡 Төслийн шийдэл
          </motion.h2>
          <Card className="bg-white border border-slate-200 rounded-2xl">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <Zap className="mx-auto mb-4 text-yellow-500" size={48} />
                <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                  Цахим ирцийн удирдлагын систем
                </h3>
                <p className="max-w-3xl mx-auto text-slate-700 leading-relaxed">
                  Энэхүү систем нь сурагчид өөрсдөө "Ирлээ" товч дарж ирцээ бүртгэх боломж олгож,
                  багш нарт бодит цагийн мэдээлэл харуулж, тогтоосон хугацааны дараа автоматаар
                  "Тасалсан" гэж тэмдэглэнэ.
                </p>
                <p className="max-w-3xl mx-auto text-slate-700 leading-relaxed mt-3">
                  Мөн сургууль хоолонд оролцох сурагчдын хүсэлтийг өмнөх өдөр цуглуулж, хоол бэлтгэл болон
                  захиалгад ашиглах боломжтой — ингэснээр хоол үйлдвэрлэл илүү үр ашигтай болно.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { emoji: "📱", title: "Сурагч бүртгэнэ", desc: "Сурагч нэвтэрч, 'Ирлээ' товч дарахад систем цагийг автоматаар хадгална." },
                  { emoji: "👁️", title: "Багш хянана", desc: "Анги дансандаа нэвтрэх тусам ирсэн/тасалсан сурагчдыг бодит цагаар харна." },
                  { emoji: "⏰", title: "Авто тэмдэглэл", desc: "Тогтоосон хугацаанд ирцээ бүртгээгүй сурагчид автоматаар 'Тасалсан' болно." },
                ].map((s, i) => (
                  <div key={i} className="text-center p-5 bg-white/90 rounded-xl">
                    <div className="text-4xl mb-3">{s.emoji}</div>
                    <h4 className="font-semibold text-slate-900 mb-2">{s.title}</h4>
                    <p className="text-slate-600 text-sm">{s.desc}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* ─── FEATURES ─── */}
        <section className="mb-20">
          <motion.h2 {...fadeLeft} className="text-3xl font-bold mb-8">
            ⚙️ Системийн үндсэн функцүүд
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <UserCheck size={28} className="text-green-500" />, title: "Сурагчийн бүртгэл", desc: "Сурагч нэг товчлуур дарахад ирцийг цаг тэмдэглэлтэйгээр бүртгэнэ.", color: "green" },
              { icon: <BookOpen size={28} className="text-blue-500" />, title: "Ангийн удирдлага", desc: "Багш анги үүсгэж, сурагчдыг нэмж, хичээлийн хуваарь тохируулна.", color: "blue" },
              { icon: <Search size={28} className="text-purple-500" />, title: "Нэрээр хайх", desc: "Сурагчийн нэрээр хайлт хийж, ирцийн түүхийг шуурхай олно.", color: "purple" },
              { icon: <Timer size={28} className="text-orange-400" />, title: "Авто тасалсан тэмдэглэл", desc: "Хугацааны дараа ирцгүй сурагчид автоматаар тасалсан гэж бүртгэгдэнэ.", color: "orange" },
              { icon: <BarChart2 size={28} className="text-cyan-400" />, title: "Ирцийн дашбоард", desc: "Өдөр, долоо хоног, сарын ирцийн хурааснаас график, тоон мэдээлэл харуулна.", color: "cyan" },
                  { icon: <ClipboardList size={28} className="text-pink-400" />, title: "Анги тус бүрийн тайлан", desc: "Анги бүрийн ирцийн нэгтгэсэн дүн, тайланг экспортлох боломжтой.", color: "pink" },
                  { icon: <FileText size={28} className="text-amber-400" />, title: "Сургууль хоол / Захиалга", desc: "Сурагчид хоолонд оролцох эсэхээ өмнөх өдөр зааж, хоол бэлтгэлд ашиглана.", color: "amber" },
            ].map((f, i) => (
              <motion.div key={i} {...fadeUp(i * 0.08)}>
                <Card className="bg-white border border-slate-200 rounded-2xl h-full hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="mb-3">{f.icon}</div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{f.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ─── HOW IT WORKS ─── */}
        <section className="mb-20">
          <motion.h2 {...fadeLeft} className="text-3xl font-bold mb-8">
            🔄 Хэрхэн ажилладаг вэ?
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { step: 1, color: "bg-blue-500", title: "Багш анги үүсгэнэ", items: ["Системд нэвтэрнэ", "Шинэ анги нэмнэ (жишээ: 10А)", "Хичээлийн цагийн хязгаар тохируулна", "Сурагчдыг жагсаалтад нэмнэ"] },
              { step: 2, color: "bg-green-500", title: "Сурагч бүртгэнэ", items: ["Өөрийн нэрээр нэвтэрнэ", "Байгаа ангиа сонгоно", "'Ирлээ' товч дарна", "Системд цаг автоматаар хадгалагдана"] },
              { step: 3, color: "bg-purple-500", title: "Систем боловсруулна", items: ["Ирцийн мэдээлэл мэдээллийн санд хадгалагдана", "Багшийн дэлгэцэд шинэчлэгдэнэ", "Хугацаа дуусахад тасалсан автоматаар тэмдэглэгдэнэ", "Тайлан бодит цагаар шинэчлэгдэнэ"] },
              { step: 4, color: "bg-orange-500", title: "Тайлан & Дүн шинжилгээ", items: ["Өдрийн ирцийн нэгтгэл", "Сурагч тус бүрийн ирцийн хувь", "Анги хоорондын харьцуулалт", "Эцэг эхэд мэдэгдэл илгээх (сонголт)"] },
            ].map((s, i) => (
              <Card key={i} className="bg-white border border-slate-200 rounded-2xl">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`${s.color} w-9 h-9 rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0`}>
                      {s.step}
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">{s.title}</h3>
                  </div>
                  <ul className="list-disc list-inside text-slate-600 text-sm space-y-2">
                    {s.items.map((item, j) => <li key={j}>{item}</li>)}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* ─── UI MOCK / VISUAL ─── */}
        <section className="mb-20">
          <motion.h2 {...fadeLeft} className="text-3xl font-bold mb-8">
            🖥️ UI Загварын урьдчилсан харагдац
          </motion.h2>

          {/* Dashboard mock */}
          <Card className="bg-white border border-slate-200 rounded-2xl mb-6 overflow-hidden">
            <div className="bg-white px-6 py-3 border-b border-slate-200 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-3 text-slate-500 text-sm">Attendance Dashboard — 10А анги</span>
            </div>
            <CardContent className="p-6">
              {/* mini stat cards */}
              <div className="grid grid-cols-4 gap-4 mb-6">
                {[
                  { label: "Нийт сурагч", val: "32", color: "text-slate-900", bg: "bg-white" },
                  { label: "Ирсэн", val: "27", color: "text-green-600", bg: "bg-green-50" },
                  { label: "Тасалсан", val: "3", color: "text-red-600", bg: "bg-red-50" },
                  { label: "Хоцорсон", val: "2", color: "text-yellow-600", bg: "bg-yellow-50" },
                ].map((c, i) => (
                  <div key={i} className={`${c.bg} rounded-xl p-4 text-center border border-slate-200`}>
                    <div className={`text-2xl font-bold ${c.color}`}>{c.val}</div>
                    <div className="text-xs text-slate-500 mt-1">{c.label}</div>
                  </div>
                ))}
              </div>

              {/* attendance table mock */}
              <div className="rounded-xl overflow-hidden border border-slate-200">
                <table className="w-full text-sm">
                  <thead className="bg-white">
                    <tr>
                      <th className="text-left py-3 px-4 text-slate-500 font-medium">#</th>
                      <th className="text-left py-3 px-4 text-slate-500 font-medium">Сурагчийн нэр</th>
                      <th className="text-center py-3 px-4 text-slate-500 font-medium">Статус</th>
                      <th className="text-center py-3 px-4 text-slate-500 font-medium">Ирсэн цаг</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: "Батболд Д.", status: "present", time: "08:02" },
                      { name: "Цэцэгмаа О.", status: "present", time: "08:05" },
                      { name: "Энхбаяр Б.", status: "late", time: "08:17" },
                      { name: "Солонго Н.", status: "absent", time: "—" },
                      { name: "Дорж Т.", status: "present", time: "07:58" },
                    ].map((row, i) => (
                      <tr key={i} className="border-t border-slate-100 hover:bg-slate-50 transition-colors">
                        <td className="py-3 px-4 text-slate-600">{i + 1}</td>
                        <td className="py-3 px-4 text-slate-900">{row.name}</td>
                        <td className="py-3 px-4 text-center">
                          {row.status === "present" && (
                            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium border border-green-200">
                              <CheckCircle size={12} /> Ирсэн
                            </span>
                          )}
                          {row.status === "absent" && (
                            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-medium border border-red-200">
                              <XCircle size={12} /> Тасалсан
                            </span>
                          )}
                          {row.status === "late" && (
                            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs font-medium border border-yellow-200">
                              <Clock size={12} /> Хоцорсон
                            </span>
                          )}
                        </td>
                        <td className="py-3 px-4 text-center text-slate-500">{row.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Student check-in mock */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-white border border-slate-200 rounded-2xl">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                  <UserCheck size={20} className="text-green-600" /> Сурагчийн бүртгэлийн цонх
                </h4>
                <div className="bg-white rounded-xl p-5 space-y-4">
                  <div>
                    <label className="text-xs text-slate-500 mb-1 block">Нэвтрэх нэр</label>
                    <div className="bg-slate-50 rounded-lg px-4 py-2 text-slate-700 text-sm">batbold.d</div>
                  </div>
                  <div>
                    <label className="text-xs text-slate-500 mb-1 block">Анги</label>
                    <div className="bg-slate-50 rounded-lg px-4 py-2 text-slate-700 text-sm">10А — Математик</div>
                  </div>
                  <div className="pt-2">
                    <div className="w-full py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white text-center font-semibold cursor-pointer transition-colors">
                      ✅ Ирлээ гэж бүртгэх
                    </div>
                  </div>
                  <div className="text-center text-slate-500 text-xs">Одоогийн цаг: 08:05 · Хугацаа дуусна: 08:30</div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border border-slate-200 rounded-2xl">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                  <BarChart2 size={20} className="text-blue-500" /> Долоо хоногийн ирц хувь
                </h4>
                <div className="space-y-3">
                  {[
                    { day: "Даваа", pct: 94 },
                    { day: "Мягмар", pct: 88 },
                    { day: "Лхагва", pct: 91 },
                    { day: "Пүрэв", pct: 85 },
                    { day: "Баасан", pct: 79 },
                  ].map((d, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-xs text-slate-500 mb-1">
                        <span>{d.day}</span>
                        <span>{d.pct}%</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${d.pct}%` }}
                          transition={{ duration: 0.8, delay: i * 0.1 }}
                          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        

        {/* ─── BENEFITS ─── */}
        <section className="mb-20">
          <motion.h2 {...fadeLeft} className="text-3xl font-bold mb-8">
            ✅ Системийн ашиг тус
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-green-50 border border-green-100 rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-green-700 mb-4 flex items-center gap-2">
                  <TrendingUp size={22} /> Ажиллагааны давуу тал
                </h3>
                <ul className="space-y-3 text-slate-700 text-sm">
                  {["Гараар бүртгэх ажлыг бүрэн халж, цагийн хэмнэлт", "Алдааг бараг тэглэнэ — бүх бүртгэл автомат", "Ирцийн мэдээлэл хэдэн секундэд бэлэн болно", "Хичээлийн эхэнд цаг алдахгүй"].map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-blue-50 border border-blue-100 rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-blue-700 mb-4 flex items-center gap-2">
                  <Target size={22} /> Удирдлагын давуу тал
                </h3>
                <ul className="space-y-3 text-slate-700 text-sm">
                  {["Сургуулийн удирдлага нэгдсэн мэдээлэлд хандах боломж", "Анги хоорондын ирцийн харьцуулалт хийх", "Ирц муутай сурагчдыг эрт тодорхойлох", "Эцэг эхэд мэдэгдэл илгээх боломж"].map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* ─── RISKS ─── */}
        <section className="mb-20">
          <motion.h2 {...fadeLeft} className="text-3xl font-bold mb-8">
            🔴 Эрсдэлүүд
          </motion.h2>
          <div className="space-y-5">
            {[
              { color: "red", dot: "bg-red-500", border: "border-red-100", bg: "bg-red-50", label: "text-red-600", title: "Интернэтийн хамаарал", items: ["Интернэт тасарвал бүртгэл хийх боломжгүй болно", "Шийдэл: Офлайн горим (Local Storage нөөц)", "Сургуулийн сүлжээний найдвартай байдлыг шалгах шаардлагатай"] },
              { color: "yellow", dot: "bg-yellow-500", border: "border-yellow-100", bg: "bg-yellow-50", label: "text-yellow-600", title: "Өгөгдлийн нууцлал", items: ["Сурагчдын мэдээлэл хадгалах журам шаардлагатай", "Firebase-ийн аюулгүй байдлын дүрэм тохируулах", "GDPR болон дотоодын хуулийн шаардлага хангах"] },
              { color: "orange", dot: "bg-orange-500", border: "border-orange-100", bg: "bg-orange-50", label: "text-orange-600", title: "Системийн буруу ашиглалт", items: ["Сурагч найзынхаа нэрээр бүртгэх оролдлого", "Шийдэл: IP хаяг эсвэл байршлын баталгаажуулалт", "Багш идэвхтэй хяналт тавих шаардлагатай"] },
              { color: "purple", dot: "bg-purple-500", border: "border-purple-100", bg: "bg-purple-50", label: "text-purple-600", title: "Техникийн эвдрэл", items: ["Сервер унах, мэдээллийн сан гэмтэх эрсдэл", "Firebase-ийн нөөцлөлт болон ажиллагааны батлан даалт", "Техникийн дэмжлэгийн баг байх шаардлагатай"] },
            ].map((r, i) => (
              <Card key={i} className={`${r.bg} ${r.border} rounded-2xl`}>
                <CardContent className="p-6">
                  <h3 className={`text-xl font-semibold ${r.label} mb-3 flex items-center gap-2`}>
                    <span className={`w-3 h-3 ${r.dot} rounded-full`}></span>
                    {r.title}
                  </h3>
                  <ul className="list-disc list-inside text-slate-700 text-sm space-y-1">
                    {r.items.map((item, j) => <li key={j}>{item}</li>)}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* ─── COST ─── */}
        <section className="mb-20">
          <motion.h2 {...fadeLeft} className="text-3xl font-bold mb-8">
            💰 Зардал ба хөгжүүлэлтийн тооцоо
          </motion.h2>
          <div className="space-y-6">
            <Card className="bg-white border border-slate-200 rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-blue-600 mb-4">⏳ Хөгжүүлэлтийн цаг</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-slate-700">
                    <thead>
                      <tr className="border-b border-slate-100">
                        <th className="text-left py-2">Ажлын хэсэг</th>
                        <th className="text-center py-2">Хугацаа</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["UI/UX дизайн", "1–2 долоо хоног"],
                        ["Frontend хөгжүүлэлт (Next.js + React)", "2–3 долоо хоног"],
                        ["Backend / Firebase интеграц", "1–2 долоо хоног"],
                        ["Тест, дебаг, хэрэглэгчийн туршилт", "1 долоо хоног"],
                        ["Байршуулалт, бэлэн болгох", "3–5 өдөр"],
                      ].map(([task, dur], i) => (
                        <tr key={i} className="border-b border-slate-100">
                          <td className="py-2">{task}</td>
                          <td className="text-center py-2 text-blue-600">{dur}</td>
                        </tr>
                      ))}
                      <tr className="bg-slate-50 font-bold">
                        <td className="py-2 text-yellow-600">Нийт хугацаа</td>
                        <td className="text-center py-2 text-yellow-600">~6–9 долоо хоног</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border border-slate-200 rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-green-600 mb-4">🌐 Байршуулалтын зардал</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { tier: "Бага (Free tier)", price: "$0/сар", items: ["Vercel үнэгүй", "Firebase Spark (үнэгүй)", "Хязгаарлагдмал хэрэглэгч"], color: "green" },
                    { tier: "Дунд (Жижиг сургууль)", price: "$5–15/сар", items: ["Vercel Pro", "Firebase Blaze", "500 хүртэл хэрэглэгч"], color: "blue" },
                    { tier: "Их (Бүрэн систем)", price: "$20–50/сар", items: ["Тусгай домэйн", "Firebase өргөтгөсөн", "1000+ хэрэглэгч"], color: "purple" },
                  ].map((t, i) => (
                    <div key={i} className="bg-white rounded-xl p-4 border border-slate-100">
                      <h4 className={`font-semibold text-${t.color}-600 mb-1`}>{t.tier}</h4>
                      <div className="text-2xl font-bold text-slate-900 mb-2">{t.price}</div>
                      <ul className="text-slate-600 text-xs space-y-1">
                        {t.items.map((item, j) => <li key={j}>• {item}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border border-slate-200 rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-center text-yellow-600 mb-4">📊 Нийт тооцоо</h3>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  {[
                    { label: "Хөгжүүлэлтийн зардал (сурагч баг)", val: "~0 MNT", note: "Сурагч хөгжүүлэгчид ажилладаг тул" },
                    { label: "Хамгийн бага байршуулалт", val: "Үнэгүй", note: "Firebase + Vercel free tier" },
                    { label: "Жилийн засвар үйлчилгээ", val: "~60,000–180,000 MNT", note: "Дунд зэргийн тохиолдолд" },
                  ].map((s, i) => (
                    <div key={i} className="bg-white rounded-xl p-4 border border-slate-100">
                      <div className="text-lg font-bold text-green-600 mb-1">{s.val}</div>
                      <div className="text-sm text-slate-900 mb-1">{s.label}</div>
                      <div className="text-xs text-slate-600">{s.note}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* ─── CONCLUSION ─── */}
        <section className="mb-10 text-center">
          <motion.h2 {...fadeUp(0)} className="text-3xl font-bold mb-4">
            🎯 Дүгнэлт
          </motion.h2>
          <motion.p {...fadeUp(0.1)} className="max-w-3xl mx-auto mb-6 leading-relaxed text-lg text-slate-700">
            Сургуулийн ирцийн цахим удирдлагын систем нь зөвхөн цагийг хэмнэхээс
            гадна боловсролын байгууллагын ил тод байдлыг нэмэгдүүлж, багш, сурагч,
            эцэг эхийн хоорондын мэдээллийн урсгалыг сайжруулна. Энэхүү хялбар,
            хямд, орчин үеийн шийдэл нь ямар ч сургуульд нэвтрүүлэх боломжтой.
          </motion.p>
          <motion.div {...fadeUp(0.2)} className="grid md:grid-cols-4 gap-4 mb-10 max-w-3xl mx-auto">
            {[
              { emoji: "⏱️", text: "Цагийг хэмнэнэ" },
              { emoji: "✅", text: "Алдааг хаана" },
              { emoji: "📊", text: "Тайлан автомат" },
              { emoji: "🏫", text: "Сургуулийг хөгжүүлнэ" },
            ].map((c, i) => (
              <div key={i} className="bg-white/90 border border-slate-100 rounded-2xl p-4 text-center">
                <div className="text-3xl mb-2">{c.emoji}</div>
                <div className="text-sm text-slate-700">{c.text}</div>
              </div>
            ))}
          </motion.div>
          <motion.div {...fadeUp(0.3)} className="flex gap-4 justify-center flex-wrap">
            <Button
              variant="outline"
              className="rounded-2xl px-8 border-slate-300 text-slate-800 hover:bg-slate-50"
              onClick={() => window.print()}
            >
              📄 Санал татах
            </Button>
            <Button className="rounded-2xl px-8 bg-green-600 hover:bg-green-700 text-white">
              ✅ Төслийг батлах
            </Button>
          </motion.div>
          <motion.div {...fadeUp(0.35)} className="mt-8 flex justify-center">
            <Button
              className="rounded-3xl px-10 py-5 bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white text-lg font-semibold shadow-2xl shadow-violet-200/50"
              onClick={() => window.open("https://surguuli-gamma.vercel.app/", "_blank")}
            >
              “Хөгжүүлэлт явагдаж буй сайтыг үзэх бол энд дарна уу”
            </Button>
          </motion.div>
        </section>

        <footer className="mt-12 py-8 border-t border-slate-200 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm uppercase tracking-[0.25em] text-slate-500 mb-3">
              Crafted with modern school vibes
            </p>
            <p className="text-lg font-semibold text-slate-900">
              Made by <span className="text-violet-600">11a zorigtbaatar</span>
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Энэ нь бүтээлч, цэвэрхэн төслийн танилцуулга бөгөөд сурагчдын дизайн болон технологийн мэдлэгийг харуулсан.
            </p>
          </div>
        </footer>

      </motion.div>
    </div>
  );
}
