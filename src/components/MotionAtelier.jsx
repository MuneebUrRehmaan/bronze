import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, Film, Loader2, Info } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const MotionAtelier = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [aspectRatio, setAspectRatio] = useState('16:9');
  const [isGenerating, setIsGenerating] = useState(false);
  const [status, setStatus] = useState('');
  const [generatedVideoUrl, setGeneratedVideoUrl] = useState(null);
  const [prompt, setPrompt] = useState('');
  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setSelectedImage(reader.result);
      setGeneratedVideoUrl(null);
    };
    reader.readAsDataURL(file);
  };

  const generateVideo = async () => {
    if (!selectedImage) return;

    try {
      setIsGenerating(true);
      setStatus('Securing access...');

      const aiStudio = window.aistudio;
      const hasKey = await aiStudio.hasSelectedApiKey();
      if (!hasKey) {
        await aiStudio.openSelectKey();
      }

      setStatus('Initializing creative engine...');
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

      const base64Data = selectedImage.split(',')[1];
      const mimeType = selectedImage.split(',')[0].split(':')[1].split(';')[0];

      setStatus('Synthesizing motion...');

      let operation = await ai.models.generateVideos({
        model: 'veo-3.1-fast-generate-preview',
        prompt: prompt || 'A cinematic masterpiece with elegant lighting and smooth camera motion.',
        image: {
          imageBytes: base64Data,
          mimeType
        },
        config: {
          numberOfVideos: 1,
          resolution: '720p',
          aspectRatio
        }
      });

      const messages = [
        'Curating light and shadow...',
        'Synthesizing cinematic frames...',
        'Polishing visual textures...',
        'Finalizing your digital legacy...'
      ];

      let i = 0;
      while (!operation.done) {
        setStatus(messages[i % messages.length]);
        i++;
        await new Promise(r => setTimeout(r, 10000));
        operation = await ai.operations.getVideosOperation({ operation });
      }

      const uri = operation.response?.generatedVideos?.[0]?.video?.uri;
      if (uri) {
        const res = await fetch(`${uri}&key=${process.env.API_KEY}`);
        const blob = await res.blob();
        setGeneratedVideoUrl(URL.createObjectURL(blob));
        setStatus('Masterpiece complete.');
      }
    } catch (error) {
      console.error(error);
      if (error?.message?.includes('Requested entity was not found')) {
        await window.aistudio.openSelectKey();
      }
      setStatus('An error occurred during creation.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="py-32 md:py-60 px-8 lg:px-24 bg-[#0a0a0a] border-y border-white/5 relative overflow-hidden">
      <div className="max-w-350 mx-auto">
        <div className="flex flex-col lg:flex-row gap-24">

          {/* LEFT */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:w-1/3">
            <span className="text-[10px] uppercase tracking-[0.5em] text-bronze block mb-8">
              05 — Motion Atelier
            </span>

            <h2 className="text-5xl md:text-7xl font-serif italic mb-12">
              Cinematic <br /> Synthesis
            </h2>

            <p className="text-white/40 text-sm tracking-widest leading-loose mb-12">
              Transform your static vision into a moving legacy.
            </p>

            <div className="space-y-8 mb-12">
              <div>
                <label className="text-[9px] uppercase tracking-[0.4em] text-white/20 block mb-3">
                  Aspect Ratio
                </label>
                <div className="flex gap-4">
                  {['16:9', '9:16'].map(ratio => (
                    <button
                      key={ratio}
                      onClick={() => setAspectRatio(ratio)}
                      className={`px-6 py-2 text-[10px] uppercase tracking-widest rounded-full border transition-all
                        ${aspectRatio === ratio ? 'border-bronze text-bronze' : 'border-white/10 text-white/40 hover:border-white/20'}`}
                    >
                      {ratio}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-[9px] uppercase tracking-[0.4em] text-white/20 block mb-3">
                  Creative Direction
                </label>
                <input
                  value={prompt}
                  onChange={e => setPrompt(e.target.value)}
                  placeholder="Elegant slow pan with morning mist"
                  className="w-full bg-transparent border-b border-white/10 py-4 text-sm italic focus:outline-none focus:border-bronze"
                />
              </div>
            </div>

            <button
              onClick={generateVideo}
              disabled={isGenerating || !selectedImage}
              className="w-full py-5 bg-white text-black text-[10px] uppercase tracking-[0.4em] font-bold rounded-full flex items-center justify-center gap-3"
            >
              {isGenerating ? <Loader2 className="animate-spin w-4 h-4" /> : <Film className="w-4 h-4" />}
              {isGenerating ? 'Synthesizing...' : 'Generate Motion'}
            </button>

            <div className="mt-8 flex gap-3 p-4 bg-white/5 border border-white/10 rounded-lg">
              <Info className="w-4 h-4 text-bronze" />
              <p className="text-[10px] text-white/40">
                Veo requires a paid API key.
              </p>
            </div>
          </motion.div>

          {/* RIGHT */}
          <div className="lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative bg-zinc-900 border border-white/5 flex items-center justify-center"
              style={{ aspectRatio: aspectRatio === '16:9' ? '16/9' : '9/16', maxHeight: '70vh' }}
            >
              <AnimatePresence mode="wait">
                {isGenerating ? (
                  <motion.div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center">
                    <Loader2 className="w-12 h-12 text-bronze animate-spin mb-6" />
                    <p className="text-xs uppercase tracking-[0.4em] text-white/60">
                      {status}
                    </p>
                  </motion.div>
                ) : generatedVideoUrl ? (
                  <video src={generatedVideoUrl} className="w-full h-full object-cover" controls autoPlay loop />
                ) : selectedImage ? (
                  <img src={selectedImage} className="w-full h-full object-cover grayscale brightness-50" />
                ) : (
                  <div onClick={() => fileInputRef.current.click()} className="cursor-pointer text-center">
                    <Upload className="w-10 h-10 text-white/20 mx-auto mb-4" />
                    <span className="text-[10px] uppercase tracking-[0.6em] text-white/40">
                      Select Source Image
                    </span>
                    <input
                      ref={fileInputRef}
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={handleImageUpload}
                    />
                  </div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MotionAtelier;
