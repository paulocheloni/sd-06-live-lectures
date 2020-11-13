import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import QuestionListPage from "./pages/QuestionListPage";
import NewQuestionPage from "./pages/NewQuestionPage";
import * as api from './services/api';

import QuestionsContext from './context/QuestionsContext';

import './App.css';

function App() {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getQuestions = async () => {
    setIsLoading(true);
    const apiReponseQuestions = await api.getQuestions();
    setQuestions(apiReponseQuestions);
    setIsLoading(false);
  }

  const createQuestion = async (question) => {
    setIsLoading(true);
    await api.createQuestion(question);
    setIsLoading(false);
  }

  return (
    <QuestionsContext.Provider value={{ questions, isLoading, getQuestions, createQuestion }}>
      <main className="App">
        <header className="main-header">
          <section className="main-header-title">
            <h3>🌽 Corn Questions</h3>
          </section>
        </header>
        <section className="main-section">
          <Switch>
            <Route
              path="/new-question"
              render={(props) => <NewQuestionPage {...props} />}
            />
            <Route
              path="/"
              render={(props) => <QuestionListPage {...props} />}
            />
          </Switch>
        </section>
      </main>
    </QuestionsContext.Provider>
  );
}

export default App;
