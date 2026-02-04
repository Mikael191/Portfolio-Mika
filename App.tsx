import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Layout } from './components/Layout';
import { Home } from './components/views/Home';
import { Projects } from './components/views/Projects';
import { About } from './components/views/About';
import { Contact } from './components/views/Contact';
import { BootSequence } from './components/BootSequence';
import { View } from './types';

const App = () => {
  const [view, setView] = useState<View>('HOME');
  const [booted, setBooted] = useState(false);

  const renderView = () => {
    switch (view) {
      case 'HOME':
        return <Home changeView={setView} />;
      case 'PROJECTS':
        return <Projects />;
      case 'ABOUT':
        return <About />;
      case 'CONTACT':
        return <Contact />;
      default:
        return <Home changeView={setView} />;
    }
  };

  return (
    <>
      <AnimatePresence>
        {!booted && <BootSequence onComplete={() => setBooted(true)} />}
      </AnimatePresence>

      {booted && (
        <Layout currentView={view} setView={setView}>
          <AnimatePresence mode="wait">
            <motion.div
              key={view}
              initial={{ opacity: 0, scale: 0.98, filter: 'blur(5px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 1.02, filter: 'blur(5px)' }}
              transition={{ duration: 0.4, ease: "circOut" }}
              className="h-full"
            >
              {renderView()}
            </motion.div>
          </AnimatePresence>
        </Layout>
      )}
    </>
  );
};

export default App;