import { useState, useEffect } from 'react'
import {
  Github,
  Mail,
  ExternalLink,
  Code2,
  Brain,
  Cpu,
  Menu,
  X,
  ArrowRight,
} from 'lucide-react'

// ─── Types ────────────────────────────────────────────────────────────────────

interface Project {
  title: string
  description: string
  tags: string[]
  github?: string
  demo?: string
  accent: string
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const projects: Project[] = [
  {
    title: '盲盒交易平台',
    description:
      '前后端分离的全栈盲盒电商平台。后端基于 Midway.js（Koa）构建 RESTful API，集成 JWT 鉴权、支付密码、阿里云 OSS 存储；前端使用 React + Tailwind CSS v4 实现盲盒概率抽奖（含保底机制）、钱包充值、订单管理及"玩家秀"社区等完整电商闭环。',
    tags: ['React', 'TypeScript', 'Midway.js', 'MySQL', 'TypeORM', 'Tailwind CSS', '阿里云 OSS'],
    github: 'https://github.com/kkSaMa-123',
    accent: 'bg-blue-50 border-blue-200',
  },
  {
    title: 'TomatoMall · 校园电商平台',
    description:
      '软件工程课程大作业，Spring Boot + Vue 3 构建的全功能校园二手书交易平台。后端采用分层架构（Controller / Service / Repository），实现商品管理、购物车、订单状态机（状态模式）及支付宝支付回调；前端含书籍浏览、商城、收藏、用户评论等模块。',
    tags: ['Spring Boot', 'Java', 'Vue 3', 'MySQL', 'JPA', 'JWT', '支付宝支付'],
    github: 'https://github.com/kkSaMa-123',
    accent: 'bg-orange-50 border-orange-200',
  },
  {
    title: 'Tower Defense · Qt 塔防游戏',
    description:
      'C++ 高级程序设计课程期末项目，基于 Qt 6 开发的塔防游戏。使用 QPainter 实现 2D 渲染，QTimer 驱动 30ms 游戏循环；包含 4 种防御塔（含远程/近战/AOE/减速）、3 种敌人类型、10 波关卡、金币与升级系统，以及完整的碰撞检测与路径点导航逻辑。',
    tags: ['C++17', 'Qt 6', 'qmake', 'OOP', 'Qt Multimedia'],
    github: 'https://github.com/kkSaMa-123',
    accent: 'bg-violet-50 border-violet-200',
  },
  {
    title: '控制台跑酷游戏',
    description:
      '大一 C 语言课程项目，纯 C + Windows API 实现的控制台跑酷游戏。以"地铁跑酷"为背景，包含三条跑道、三类障碍物、道具系统（无敌星 / 减速 / 磁铁 / 保护泡泡）、金币商店及三档难度，全部逻辑集中于单文件 1000+ 行代码，是初学时期完整实现游戏机制的练手作品。',
    tags: ['C', 'Windows API', 'Console', 'GCC'],
    github: 'https://github.com/kkSaMa-123',
    accent: 'bg-emerald-50 border-emerald-200',
  },
]

const navLinks = [
  { label: '项目', href: '#projects' },
  { label: '技能', href: '#skills' },
  { label: '关于', href: '#about' },
  { label: '联系我', href: '#contact' },
]

// ─── Sub-components ───────────────────────────────────────────────────────────

function Tag({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200">
      {label}
    </span>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className={`group flex flex-col gap-4 rounded-3xl border p-6 ${project.accent} transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
    >
      <h3 className="text-lg font-bold text-slate-900">{project.title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed flex-1">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>
      <div className="flex items-center gap-3 pt-1">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors"
          >
            <Github size={14} />
            GitHub
          </a>
        )}
        {project.demo && project.demo !== '#' && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-blue-600 transition-colors"
          >
            <ExternalLink size={14} />
            Demo
          </a>
        )}
      </div>
    </div>
  )
}

// ─── Sections ─────────────────────────────────────────────────────────────────

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200/60'
        : 'bg-transparent'
        }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-base font-black tracking-tight text-slate-900 hover:text-blue-600 transition-colors"
        >
          JIXINKAI<span className="text-blue-500"></span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-2 rounded-xl text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-slate-200 px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="px-4 py-3 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-6">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        {/* Status badge
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-medium">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
          </span>
          正在寻找 2026 暑期实习
          <Sparkles size={14} />
        </div> */}

        {/* Heading */}
        <div className="space-y-3">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 leading-none">
            计鑫楷
            <br />
            <span className="text-blue-500">软件工程</span>
            <span className="text-slate-400"> & </span>
            <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
              AI
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto">

          南京大学 · 大三 · 智能软件与工程学院

        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            查看我的项目
            <ArrowRight size={16} />
          </a>
          <a
            href="https://github.com/kkSaMa-123"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl text-sm font-semibold text-slate-700 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all shadow-sm hover:-translate-y-0.5"
          >
            <Github size={16} />
            GitHub 主页
          </a>
        </div>
      </div>
    </section>
  )
}

function SkillBento() {
  const domains = [
    {
      icon: <Code2 size={22} className="text-blue-500" />,
      title: '前端工程',
      subtitle: 'Frontend Engineering',
      color: 'from-blue-50 to-sky-50 border-blue-200/80',
      iconBg: 'bg-blue-100',
      skills: [
        { name: 'React', level: 90 },
        { name: 'Vue 3', level: 80 },
        { name: 'Vite', level: 85 },
        { name: 'Tailwind CSS', level: 88 },
        { name: 'TypeScript', level: 82 },
        { name: 'HarmonyOS (ArkUI)', level: 65 },
      ],
    },
    {
      icon: <Brain size={22} className="text-violet-500" />,
      title: '人工智能',
      subtitle: 'Artificial Intelligence',
      color: 'from-violet-50 to-purple-50 border-violet-200/80',
      iconBg: 'bg-violet-100',
      skills: [
        { name: 'Computer Vision', level: 80 },
        { name: 'PyTorch', level: 75 },
        { name: 'Python', level: 88 },
        { name: '模型部署', level: 68 },
        { name: 'OpenCV', level: 72 },
        { name: 'Hugging Face', level: 65 },
      ],
    },
    {
      icon: <Cpu size={22} className="text-emerald-500" />,
      title: '计算机内核',
      subtitle: 'System & Theory',
      color: 'from-emerald-50 to-teal-50 border-emerald-200/80',
      iconBg: 'bg-emerald-100',
      skills: [
        { name: '编译器原理', level: 78 },
        { name: '静态代码分析', level: 72 },
        { name: '数据结构 & 算法', level: 88 },
        { name: 'MCM/ICM 建模', level: 75 },
        { name: 'C / C++', level: 80 },
        { name: 'Linux', level: 70 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-12 space-y-2">
          <p className="text-sm font-semibold text-blue-500 uppercase tracking-widest">
            Core Skills
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900">
            技术栈
          </h2>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {domains.map((domain) => (
            <div
              key={domain.title}
              className={`group rounded-3xl border bg-gradient-to-br p-6 ${domain.color} transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2.5 rounded-2xl ${domain.iconBg}`}>
                  {domain.icon}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 leading-tight">
                    {domain.title}
                  </h3>
                  <p className="text-xs text-slate-400">{domain.subtitle}</p>
                </div>
              </div>

              {/* Skill bars */}
              <div className="space-y-3">
                {domain.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-medium text-slate-700">
                        {skill.name}
                      </span>
                      <span className="text-xs text-slate-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-white/60 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-current transition-all duration-700"
                        style={{ width: `${skill.level}%`, color: 'inherit' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-12 space-y-2">
          <p className="text-sm font-semibold text-blue-500 uppercase tracking-widest">
            Featured Work
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900">
            精选项目
          </h2>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm font-semibold text-blue-500 uppercase tracking-widest">
                About Me
              </p>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900">
                关于我
              </h2>
            </div>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                你好，我是 <span className="font-semibold text-slate-900">计鑫楷</span>，目前就读于南京大学智能软件与工程学院。我热衷于探索计算机科学中最具挑战性的领域——从编译器的内部原理到神经网络的视觉感知。
              </p>
              <p>
                在工程实践上，我专注于构建兼具性能与体验的 Web 应用，同时也在积极探索 AI 技术在实际场景中的落地应用，以及鸿蒙生态下的跨端开发。
              </p>
              <p>
                我参与过 MCM/ICM 数学建模竞赛，并保持着对算法与数理基础的持续投入。目前正积极寻找 <span className="font-semibold text-blue-600">2026 年暑期实习</span>机会。
              </p>
            </div>
          </div>

          {/* Stats card */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: '3+', label: '年编程经验' },
              { value: '10+', label: '完成项目' },
              { value: 'MCM', label: '数学建模竞赛' },
              { value: '2026', label: '暑期实习目标' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-3xl font-black text-blue-600 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-12 space-y-2">
          <p className="text-sm font-semibold text-blue-500 uppercase tracking-widest">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900">
            联系我
          </h2>
        </div>

        <div className="max-w-2xl">
          <p className="text-lg text-slate-500 leading-relaxed mb-10">
            无论是实习机会、项目合作还是技术交流，都欢迎随时联系我。我会尽快回复你的邮件。
          </p>

          {/* Contact card */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:xinkaiji@outlook.com"
              className="group flex items-center gap-4 flex-1 rounded-3xl border border-slate-200 bg-slate-50 px-6 py-5 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 hover:shadow-md"
            >
              <div className="p-3 rounded-2xl bg-blue-100 text-blue-600 group-hover:bg-blue-200 transition-colors">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-xs font-medium text-slate-400 mb-0.5">邮箱</p>
                <p className="text-sm font-semibold text-slate-900">
                  xinkaiji@outlook.com
                </p>
              </div>
            </a>

            <a
              href="https://github.com/kkSaMa-123"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 flex-1 rounded-3xl border border-slate-200 bg-slate-50 px-6 py-5 hover:border-slate-400 hover:bg-slate-100 transition-all duration-300 hover:shadow-md"
            >
              <div className="p-3 rounded-2xl bg-slate-200 text-slate-700 group-hover:bg-slate-300 transition-colors">
                <Github size={20} />
              </div>
              <div>
                <p className="text-xs font-medium text-slate-400 mb-0.5">GitHub</p>
                <p className="text-sm font-semibold text-slate-900">
                  kkSaMa-123
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-base font-black text-slate-900">
          JIXINKAI<span className="text-blue-500"></span>
        </div>
        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} 计鑫楷. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <SkillBento />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
