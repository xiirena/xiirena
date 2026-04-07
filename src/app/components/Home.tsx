import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Edit2, Check, Server, Shield, MessageSquare, Terminal, Eye, Trophy, Users, Clock, Activity } from "lucide-react";

interface ServerData {
  id: number;
  name: string;
  bio: string;
  status: "Active" | "Past" | "Trial";
}

function TypewriterText() {
  const text = "XiiRENA";
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < text.length) {
          setDisplayText(text.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2500); // Pause before deleting
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(text.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
        }
      }
    }, isDeleting ? 120 : 200);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting]);

  return (
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-purple-500 to-purple-700">
      {displayText}
    </span>
  );
}

export function Home() {
  const [servers, setServers] = useState<ServerData[]>([
    {
      id: 1,
      name: "Hypixel",
      bio: "Managing the largest playerbase in the world, handling hundreds of reports daily.",
      status: "Active",
    },
    {
      id: 2,
      name: "Mineplex",
      bio: "Former senior moderator leading a team of 15 junior staff members.",
      status: "Past",
    },
    {
      id: 3,
      name: "PvP Lounge",
      bio: "Currently undergoing trial for screensharing and advanced cheat detection.",
      status: "Trial",
    },
  ]);

  const updateServer = (id: number, field: keyof ServerData, value: string) => {
    setServers((prev) =>
      prev.map((srv) => (srv.id === id ? { ...srv, [field]: value } : srv))
    );
  };

  const stats = [
    { icon: <Trophy size={20} />, value: "5+ Years", label: "Experience" },
    { icon: <Users size={20} />, value: "10k+", label: "Tickets Resolved" },
    { icon: <Activity size={20} />, value: "3 Major", label: "Servers Moderated" },
    { icon: <Clock size={20} />, value: "24/7", label: "Availability" },
  ];

  const skills = [
    { icon: <Shield size={24} />, title: "Cheat Detection", desc: "Expert in identifying advanced clients and ghost features." },
    { icon: <MessageSquare size={24} />, title: "Ticket Management", desc: "Resolving player disputes calmly and efficiently via Discord & in-game." },
    { icon: <Eye size={24} />, title: "Screensharing (SS)", desc: "Proficient with Anydesk and process-hacker techniques to find hidden files." },
    { icon: <Terminal size={24} />, title: "Plugin Config", desc: "Basic understanding of YAML to adjust anticheats and chat filters." },
  ];

  return (
    <div className="flex flex-col gap-24 pt-16">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center gap-6">
        <div className="flex text-6xl md:text-8xl font-black tracking-tighter items-center justify-center min-h-[100px]">
          <TypewriterText />
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
            className="text-purple-500 font-light ml-2 -mr-8"
          >
            |
          </motion.span>
        </div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-xl md:text-2xl text-purple-200/80 font-medium max-w-2xl"
        >
          Professional Minecraft Staff Member & Community Manager
        </motion.p>

        {/* Stats Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 w-full"
        >
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center justify-center p-6 bg-purple-900/10 border border-purple-500/20 rounded-3xl backdrop-blur-sm shadow-[0_0_15px_rgba(147,51,234,0.05)]">
              <div className="text-purple-400 mb-3 bg-purple-500/10 p-3 rounded-full">{stat.icon}</div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs text-purple-200/60 uppercase tracking-widest font-semibold">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Tools Section */}
      <section className="flex flex-col gap-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4"
        >
          <div className="h-[2px] w-12 bg-purple-500/50 rounded-full" />
          <h2 className="text-3xl font-bold tracking-tight text-white">Tools & Utilities</h2>
          <div className="h-[2px] flex-1 bg-gradient-to-r from-purple-500/50 to-transparent rounded-full" />
        </motion.div>
        
        <div className="flex flex-wrap gap-4">
          {["AnyDesk", "Process Hacker", "Echo", "Paladin", "Discord", "Trello", "Jira", "LiteBans", "ZenDesk", "TCPView"].map((tool, i) => (
            <motion.div 
              key={tool}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="px-6 py-3 bg-purple-900/20 border border-purple-500/20 rounded-full text-purple-100 hover:bg-purple-600/30 hover:border-purple-500/50 hover:shadow-[0_0_15px_rgba(147,51,234,0.3)] transition-all cursor-default font-medium"
            >
              {tool}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="flex flex-col gap-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4"
        >
          <div className="h-[2px] w-12 bg-purple-500/50 rounded-full" />
          <h2 className="text-3xl font-bold tracking-tight text-white">Core Skills</h2>
          <div className="h-[2px] flex-1 bg-gradient-to-r from-purple-500/50 to-transparent rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 p-6 rounded-3xl hover:bg-white/10 transition-colors group"
            >
              <div className="bg-purple-500/20 text-purple-300 w-12 h-12 flex items-center justify-center rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{skill.title}</h3>
              <p className="text-purple-200/70 leading-relaxed">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Server Positions Section */}
      <section className="flex flex-col gap-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4"
        >
          <div className="h-[2px] w-12 bg-purple-500/50 rounded-full" />
          <h2 className="text-3xl font-bold tracking-tight text-white">Current Positions</h2>
          <div className="h-[2px] flex-1 bg-gradient-to-r from-purple-500/50 to-transparent rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {servers.map((server, index) => (
            <ServerCard
              key={server.id}
              server={server}
              index={index}
              onChange={(field, value) => updateServer(server.id, field, value)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

function ServerCard({
  server,
  index,
  onChange,
}: {
  server: ServerData;
  index: number;
  onChange: (field: keyof ServerData, value: string) => void;
}) {
  const [isEditing, setIsEditing] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Past": return "bg-slate-500/20 text-slate-400 border-slate-500/30";
      case "Trial": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      default: return "bg-purple-500/20 text-purple-400 border-purple-500/30";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      className="relative bg-gradient-to-b from-slate-900/80 to-slate-950 border border-purple-500/20 p-6 rounded-3xl flex flex-col gap-4 overflow-hidden group shadow-[0_0_30px_rgba(147,51,234,0.05)] hover:shadow-[0_0_40px_rgba(147,51,234,0.1)] transition-shadow"
    >
      {/* Decorative top glow */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="flex justify-between items-start">
        <div className="bg-purple-900/30 p-3 rounded-2xl border border-purple-500/20">
          <Server className="text-purple-400" size={28} />
        </div>
        
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="text-slate-400 hover:text-white p-2 rounded-full hover:bg-white/5 transition-colors"
          aria-label={isEditing ? "Save changes" : "Edit server"}
        >
          {isEditing ? <Check size={18} className="text-green-400" /> : <Edit2 size={18} />}
        </button>
      </div>

      <div className="flex flex-col flex-1 gap-3 mt-2">
        {isEditing ? (
          <div className="flex flex-col gap-2">
            <input
              type="text"
              value={server.name}
              onChange={(e) => onChange("name", e.target.value)}
              className="bg-black/40 border border-purple-500/30 rounded-xl px-3 py-2 text-xl font-bold text-white focus:outline-none focus:border-purple-400 w-full"
              placeholder="Server Name"
            />
            <select
              value={server.status}
              onChange={(e) => onChange("status", e.target.value)}
              className="bg-black/40 border border-purple-500/30 rounded-xl px-3 py-2 text-sm text-purple-200 focus:outline-none focus:border-purple-400 w-full appearance-none"
            >
              <option value="Active">Active</option>
              <option value="Past">Past</option>
              <option value="Trial">Trial</option>
            </select>
            <textarea
              value={server.bio}
              onChange={(e) => onChange("bio", e.target.value)}
              className="bg-black/40 border border-purple-500/30 rounded-xl px-3 py-2 text-sm text-slate-300 focus:outline-none focus:border-purple-400 w-full h-24 resize-none"
              placeholder="Describe your role..."
            />
          </div>
        ) : (
          <>
            <div className="flex items-center gap-3">
              <h3 className="text-2xl font-bold text-white tracking-tight">{server.name}</h3>
              <span className={`text-xs px-2.5 py-1 rounded-full font-medium border ${getStatusColor(server.status)}`}>
                {server.status}
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed text-sm flex-1">{server.bio}</p>
          </>
        )}
      </div>
    </motion.div>
  );
}
