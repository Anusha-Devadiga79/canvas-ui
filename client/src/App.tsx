// src/App.tsx

import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

// Page Imports
import NotFound from "@/pages/not-found";
import Dashboard from "@/pages/dashboard";
import CourseDetail from "@/pages/course-detail";
import CoursesPage from "@/pages/courses-page";
import CalendarPage from "@/pages/calendar-page";
import InboxPage from "@/pages/inbox-page";
import HelpPage from "@/pages/help-page";

// Router setup
function Router() {
  return (
    <Switch>
      <Route path="/" component={Dashboard} />
      <Route path="/courses/:id" component={CourseDetail} />
      <Route path="/courses" component={CoursesPage} />
      <Route path="/calendar" component={CalendarPage} />
      <Route path="/inbox" component={InboxPage} />
      <Route path="/help" component={HelpPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

// App wrapper
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
