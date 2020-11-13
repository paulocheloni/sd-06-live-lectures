import React from 'react';

class QuestionList extends React.Component {
  
  
  render() {
    const { questions } = this.props;
    return (
      <div>
        {
          questions.map(question => 
            <section className="question-card">
              <header className="question-card-header">
                <img className="question-card-image" src="https://avatars.dicebear.com/api/human/test.svg?mood[]=happy" alt=""/>
                {question.user}
              </header>
              <p className="question-card-body">{question.question}</p>
            </section>
          )
        }
      </div>
    );
  }
}

export default QuestionList;
