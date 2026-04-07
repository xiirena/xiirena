import { useState } from "react";
import { motion } from "motion/react";
import { Copy, CheckCircle, MessageCircle, Gamepad2, Heart } from "lucide-react";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const discordUsername = "xiirena";

  const handleCopy = () => {
    navigator.clipboard.writeText(discordUsername);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center pt-24 pb-12 gap-12 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", damping: 15 }}
        className="flex flex-col items-center gap-6 max-w-lg w-full relative"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-purple-500/10 blur-[80px] rounded-full -z-10 pointer-events-none" />

        <div className="bg-indigo-500/20 p-5 rounded-3xl border border-indigo-500/30 text-indigo-400 mb-2">
          <MessageCircle size={48} />
        </div>

        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">Let's connect.</h1>
        <p className="text-lg text-slate-400 leading-relaxed px-4">
          I'm currently accepting new staff management opportunities and server consulting roles. The best way to reach me is directly on Discord.
        </p>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleCopy}
          className="mt-8 relative group w-full bg-slate-900 border border-purple-500/30 hover:border-purple-400 p-6 rounded-3xl flex items-center justify-between overflow-hidden shadow-[0_0_30px_rgba(147,51,234,0.1)] transition-all"
        >
          {/* Animated glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <div className="flex items-center gap-4 z-10">
            <div className="bg-[#5865F2]/20 p-3 rounded-xl border border-[#5865F2]/30">
              <Gamepad2 className="text-[#5865F2]" size={24} />
            </div>
            <div className="flex flex-col items-start">
              <span className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-1">Add me on Discord</span>
              <span className="text-2xl font-bold text-white tracking-tight">{discordUsername}</span>
            </div>
          </div>

          <div className="z-10 bg-white/5 p-4 rounded-xl text-purple-300 group-hover:bg-white/10 group-hover:text-white transition-colors">
            {copied ? <CheckCircle size={24} className="text-green-400" /> : <Copy size={24} />}
          </div>
        </motion.button>

        <div className="flex items-center gap-2 mt-4 text-sm text-slate-500">
          <Heart size={14} className="text-purple-500" />
          <span>Usually replies within a few hours</span>
        </div>
      </motion.div>
    </div>
  );
}
