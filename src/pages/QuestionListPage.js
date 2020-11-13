import React from 'react';

import QuestionList from '../components/QuestionList';


class QuestionListPage extends React.Component {
  async componentDidMount() {
    const { getQuestions } = this.props;
    getQuestions();
  }

  render() {
    const { questions, isLoading } = this.props;
    return questions.length > 0 && !isLoading ? (
      <>
        <QuestionList questions={questions} />
        <button onClick={() => this.props.history.push('/new-question')}>Nova Pergunta</button>
      </>
    ) : <span>Carregando...</span>;
  }
}

export default QuestionListPage;
