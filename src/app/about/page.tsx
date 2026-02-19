import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'About This Unexplained Universe. Our mission is to explore the world\'s greatest unsolved mysteries with evidence, analysis, and intellectual curiosity.',
}

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">About This Unexplained Universe</h1>
      
      <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
        <p>
          We live in a universe that&apos;s far stranger than most people realize. From signals that shouldn&apos;t exist 
          to disappearances that defy explanation, there are genuine mysteries out there that even our best scientists 
          and investigators haven&apos;t been able to solve.
        </p>
        <p>
          This Unexplained Universe exists to explore those mysteries honestly. We&apos;re not here to push conspiracy 
          theories or jump to supernatural conclusions. We&apos;re here to examine the evidence, consider the leading 
          theories, and let you make up your own mind.
        </p>
        
        <h2 className="text-2xl font-bold text-white mt-10 mb-4">Our Approach</h2>
        <p>
          Every article we publish is researched thoroughly and sourced carefully. We link to primary documents, 
          scientific papers, and official reports whenever possible. When there&apos;s a mundane explanation that fits 
          the evidence, we&apos;ll tell you. When the mystery remains genuinely open, we&apos;ll tell you that too.
        </p>
        <p>
          Think of us as the intersection of curiosity and critical thinking. We believe that real mysteries are 
          far more interesting than made-up ones, and that treating these topics with intellectual rigor makes them 
          more compelling, not less.
        </p>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">What We Cover</h2>
        <ul className="space-y-2">
          <li className="flex items-start gap-2"><span className="text-nebula-400">•</span> UFOs and UAP encounters with credible witnesses</li>
          <li className="flex items-start gap-2"><span className="text-nebula-400">•</span> Unexplained disappearances and cold cases</li>
          <li className="flex items-start gap-2"><span className="text-nebula-400">•</span> Space anomalies and signals from the cosmos</li>
          <li className="flex items-start gap-2"><span className="text-nebula-400">•</span> Ancient mysteries and archaeological puzzles</li>
          <li className="flex items-start gap-2"><span className="text-nebula-400">•</span> Ocean depths and what we haven&apos;t found yet</li>
          <li className="flex items-start gap-2"><span className="text-nebula-400">•</span> Historical enigmas that still puzzle researchers</li>
          <li className="flex items-start gap-2"><span className="text-nebula-400">•</span> Consciousness and the nature of reality</li>
          <li className="flex items-start gap-2"><span className="text-nebula-400">•</span> Cryptid sightings and the evidence behind them</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">Get in Touch</h2>
        <p>
          Have a mystery you think we should investigate? Found an error in one of our articles? 
          We&apos;d love to hear from you. Reach out anytime.
        </p>
      </div>
    </div>
  )
}
