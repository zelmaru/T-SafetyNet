import ThemeToggleButton from '@/components/ThemeButton';
import { ThemeProvider } from '@/context/ThemeProvider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PAGES } from '@/types';
import AcademyPage from './pages/AcademyPage/AcademyPage';

const App = () => {
  return (
    <ThemeProvider>
      <Tabs
        defaultValue={PAGES.ACADEMY}
        className="flex h-[100dvh] w-full flex-col overflow-hidden"
      >
        <header className="flex flex-shrink-0 items-center justify-between p-2">
          <TabsList className="rounded-none bg-transparent p-0">
            <TabsTrigger
              value={PAGES.ACADEMY}
              className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none"
            >
              Академия
            </TabsTrigger>
          </TabsList>
          <ThemeToggleButton />
        </header>
        <TabsContent
          value={PAGES.ACADEMY}
          className="min-h-0 flex-1 overflow-hidden data-[state=active]:flex data-[state=active]:flex-col"
        >
          <AcademyPage />
        </TabsContent>
      </Tabs>
    </ThemeProvider>
  );
};

export default App;
