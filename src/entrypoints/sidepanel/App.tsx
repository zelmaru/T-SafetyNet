import ThemeToggleButton from '@/components/ThemeButton';
import { ThemeProvider } from '@/context/ThemeProvider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PAGES } from '@/types';
import KnowledgeBasePage from './pages/KnowledgeBasePage/KnowledgeBasePage';

const App = () => {
  return (
    <ThemeProvider>
      <Tabs
        defaultValue={PAGES.KNOWLEDGE_BASE}
        className="flex h-[100dvh] w-full flex-col overflow-hidden"
      >
        <header className="flex flex-shrink-0 items-center justify-between p-2">
          <TabsList className="rounded-none bg-transparent p-0">
            <TabsTrigger
              value={PAGES.KNOWLEDGE_BASE}
              className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none"
            >
              База знаний
            </TabsTrigger>
          </TabsList>
          <ThemeToggleButton />
        </header>
        <TabsContent
          value={PAGES.KNOWLEDGE_BASE}
          className="min-h-0 flex-1 overflow-hidden data-[state=active]:flex data-[state=active]:flex-col"
        >
          <KnowledgeBasePage />
        </TabsContent>
      </Tabs>
    </ThemeProvider>
  );
};

export default App;
