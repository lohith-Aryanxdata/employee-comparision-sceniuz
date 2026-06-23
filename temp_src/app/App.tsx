import { Heart, Sparkles } from 'lucide-react';
import { Sparkle } from './components/Sparkle';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-cream-50">
      {/* Floating sparkles background effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-30">
        <Sparkles className="absolute top-20 left-10 text-pink-300 animate-pulse" size={24} />
        <Sparkles className="absolute top-40 right-20 text-purple-300 animate-pulse" size={16} style={{ animationDelay: '1s' }} />
        <Sparkles className="absolute top-60 left-1/4 text-pink-200 animate-pulse" size={20} style={{ animationDelay: '2s' }} />
        <Sparkles className="absolute bottom-40 right-1/3 text-purple-200 animate-pulse" size={18} style={{ animationDelay: '0.5s' }} />
        <Sparkles className="absolute bottom-60 left-1/2 text-pink-300 animate-pulse" size={22} style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Hero Section */}
      <section className="relative px-6 py-20 md:py-32 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Floating hearts */}
          <div className="flex justify-center items-center gap-4 mb-6">
            <Heart className="text-pink-400 fill-pink-400 animate-pulse" size={32} />
            <Heart className="text-rose-400 fill-rose-400 animate-pulse" size={48} style={{ animationDelay: '0.5s' }} />
            <Heart className="text-pink-400 fill-pink-400 animate-pulse" size={32} style={{ animationDelay: '1s' }} />
          </div>
          
          <h1 className="font-['Playfair_Display'] mb-6 text-pink-600">
            To My Dearest Love
          </h1>
          
          <p className="font-['Quicksand'] text-purple-700/80 max-w-2xl mx-auto">
            Every word here comes straight from my heart, wrapped in love and sincerity
            <Sparkle className="ml-2 text-pink-400" size={20} />
          </p>
        </div>
      </section>

      {/* Apology Card Section */}
      <section className="px-6 py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-pink-100/80 to-purple-100/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border-2 border-pink-200/50">
            <div className="flex justify-center mb-6">
              <div className="bg-white/60 rounded-full p-4">
                <Heart className="text-rose-500 fill-rose-500" size={40} />
              </div>
            </div>
            
            <h2 className="font-['Playfair_Display'] text-center mb-6 text-purple-700">
              I'm Sorry...
            </h2>
            
            <div className="space-y-4 font-['Quicksand'] text-purple-800/90">
              <p>
                I know I haven't been perfect, and I'm truly sorry for the times I've hurt you or let you down. 
                You mean the world to me, and seeing you upset breaks my heart into a million pieces.
              </p>
              <p>
                I promise to do better, to listen more, and to cherish every moment we have together. 
                Your happiness is my happiness, and I'll work every day to be the person you deserve.
              </p>
              <p className="text-center font-['Dancing_Script'] text-rose-600 mt-6">
                Please forgive me, my love
                <Sparkle className="ml-2 text-pink-400" size={18} />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Love Letter Section */}
      <section className="px-6 py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          <div className="bg-cream-100 rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-pink-200/30 relative overflow-hidden">
            {/* Paper texture effect */}
            <div className="absolute inset-0 opacity-5 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,#000_2px,#000_3px)]"></div>
            
            <div className="relative">
              <div className="flex items-center gap-3 mb-8">
                <Heart className="text-rose-400 fill-rose-400" size={28} />
                <h2 className="font-['Dancing_Script'] text-purple-700">
                  A Letter to You
                </h2>
              </div>
              
              <div className="space-y-6 font-['Quicksand'] text-purple-900/80">
                <p className="font-['Dancing_Script'] text-rose-600">
                  My Dearest,
                </p>
                
                <p>
                  Where do I even begin? You've brought so much light into my life that sometimes I can't believe 
                  how lucky I am to have you. Your smile brightens my darkest days, and your laughter is my 
                  favorite melody.
                </p>
                
                <p>
                  I love the way you understand me without words, the way you make me feel safe and cherished. 
                  Every moment with you feels like a dream I never want to wake up from. You've shown me what 
                  true love really means.
                </p>
                
                <p>
                  Thank you for being patient with me, for loving me through my flaws, and for choosing me 
                  every single day. I promise to love you with all my heart, today and always.
                </p>
                
                <p className="font-['Dancing_Script'] text-rose-600 pt-4">
                  Forever yours,
                  <br />
                  <span className="text-purple-600">With all my love</span>
                  <Sparkle className="ml-2 text-pink-400" size={16} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="px-6 py-12 md:py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-['Playfair_Display'] text-center mb-12 text-purple-700">
            Our Beautiful Moments
            <Heart className="inline-block ml-3 text-pink-400 fill-pink-400" size={32} />
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Photo 1 */}
            <div className="group">
              <div className="bg-white rounded-3xl p-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1658851866325-49fb8b7fbcb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGNvdXBsZSUyMHN1bnNldHxlbnwxfHx8fDE3Njc1NjQwMTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Romantic sunset moment"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-['Dancing_Script'] text-center text-purple-600">
                  Sunsets are better with you
                  <Sparkle className="ml-2 text-pink-400" size={16} />
                </p>
              </div>
            </div>

            {/* Photo 2 */}
            <div className="group">
              <div className="bg-white rounded-3xl p-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1506014299253-3725319c0f69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBob2xkaW5nJTIwaGFuZHN8ZW58MXx8fHwxNzY3NTk5MTU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Holding hands"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-['Dancing_Script'] text-center text-purple-600">
                  Forever holding your hand
                  <Sparkle className="ml-2 text-pink-400" size={16} />
                </p>
              </div>
            </div>

            {/* Photo 3 */}
            <div className="group">
              <div className="bg-white rounded-3xl p-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1743306987862-8ddc40325e4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGhlYXJ0JTIwbG92ZXxlbnwxfHx8fDE3Njc2MjYzNzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Love and hearts"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-['Dancing_Script'] text-center text-purple-600">
                  My heart belongs to you
                  <Sparkle className="ml-2 text-pink-400" size={16} />
                </p>
              </div>
            </div>

            {/* Photo 4 */}
            <div className="group">
              <div className="bg-white rounded-3xl p-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1766974888376-3697b53495f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBsYXVnaGluZyUyMHRvZ2V0aGVyfGVufDF8fHx8MTc2NzU1NTgzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Laughing together"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-['Dancing_Script'] text-center text-purple-600">
                  Your laugh is my favorite sound
                  <Sparkle className="ml-2 text-pink-400" size={16} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Message Section */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-gradient-to-br from-rose-100/80 to-pink-100/80 rounded-3xl p-12 md:p-16 shadow-2xl border-2 border-pink-300/50">
            {/* Big heart */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <Heart className="text-rose-500 fill-rose-500 animate-pulse" size={120} />
                <Sparkles className="absolute -top-2 -right-2 text-pink-400 animate-pulse" size={28} />
                <Sparkles className="absolute -bottom-2 -left-2 text-purple-400 animate-pulse" size={24} style={{ animationDelay: '0.5s' }} />
              </div>
            </div>
            
            <h2 className="font-['Playfair_Display'] mb-6 text-purple-700">
              You Are My Everything
            </h2>
            
            <p className="font-['Quicksand'] text-purple-800/90 mb-8">
              No matter what happens, I want you to know that my love for you is unwavering and true. 
              You are my partner, my best friend, and my greatest blessing. I choose you, today and always.
            </p>
            
            <p className="font-['Dancing_Script'] text-rose-600">
              I love you more than words can say
              <Sparkle className="ml-2 text-pink-400" size={20} />
            </p>
            
            {/* Heart border decoration */}
            <div className="flex justify-center gap-3 mt-8">
              <Heart className="text-pink-300 fill-pink-300" size={20} />
              <Heart className="text-rose-300 fill-rose-300" size={20} />
              <Heart className="text-purple-300 fill-purple-300" size={20} />
              <Heart className="text-rose-300 fill-rose-300" size={20} />
              <Heart className="text-pink-300 fill-pink-300" size={20} />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 text-center">
        <p className="font-['Quicksand'] text-purple-600/60">
          Made with endless love
          <Heart className="inline-block mx-2 text-pink-400 fill-pink-400" size={16} />
          January 2026
        </p>
      </footer>
    </div>
  );
}
