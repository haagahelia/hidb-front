import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Trophy, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
// Update the import path to the correct location of Progress
import { Progress } from "../components/ui/progress";
import { aircraftData } from "@/data/aircraftData";

const Quiz = () => {
  const { id } = useParams();
  const aircraft = aircraftData.find((a) => a.id === parseInt(id));

  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  useEffect(() => {
    if (aircraft) {
      generateQuestions();
    }
  }, [aircraft]);

  const generateQuestions = () => {
    const qs = [
      {
        question: `What is the manufacturer of ${aircraft.name}?`,
        options: [aircraft.manufacturer, "Boeing", "Airbus", "Lockheed Martin"],
        correct: aircraft.manufacturer,
      },
      {
        question: `In what year was ${aircraft.name} built?`,
        options: [
          aircraft.year_built.toString(),
          (aircraft.year_built + 5).toString(),
          (aircraft.year_built - 5).toString(),
          (aircraft.year_built + 10).toString(),
        ],
        correct: aircraft.year_built.toString(),
      },
      {
        question: `What type of aircraft is ${aircraft.name}?`,
        options: [
          aircraft.type,
          "military",
          "commercial",
          "general aviation",
        ].filter((t) => t !== aircraft.type),
        correct: aircraft.type,
      },
      {
        question: `What is the model of ${aircraft.name}?`,
        options: [aircraft.model, "Unknown", "Prototype", "Experimental"],
        correct: aircraft.model,
      },
      {
        question: `What is the status of ${aircraft.name}?`,
        options: [
          aircraft.status,
          "on display",
          "in storage",
          "under restoration",
        ].filter((s) => s !== aircraft.status),
        correct: aircraft.status,
      },
    ];
    setQuestions(qs);
  };

  const handleAnswer = (answer) => {
    if (isAnswered) return;

    setSelectedAnswer(answer);
    setIsAnswered(true);

    if (answer === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setIsAnswered(false);
      } else {
        setShowResult(true);
      }
    }, 1500);
  };

  const getAnswerButtonVariant = (option) => {
    if (!isAnswered) return "outline";

    if (option === questions[currentQuestion].correct) return "default";
    if (
      option === selectedAnswer &&
      option !== questions[currentQuestion].correct
    )
      return "destructive";

    return "outline";
  };

  if (!aircraft) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <Card>
            <CardContent className="text-center py-8">
              <h1 className="text-2xl font-bold mb-4">Aircraft Not Found</h1>
              <Link to="/aircraft">
                <Button>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Aircraft Collection
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (showResult) {
    const percentage = Math.round((score / questions.length) * 100);
    const getResultMessage = () => {
      if (percentage >= 80) return "Excellent! You're an aviation expert!";
      if (percentage >= 60) return "Good job! You know your aircraft well.";
      if (percentage >= 40) return "Not bad! Keep learning about aviation.";
      return "Keep studying! Aviation history is fascinating.";
    };

    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Trophy className="h-16 w-16 text-yellow-500" />
              </div>
              <CardTitle className="text-3xl">Quiz Complete!</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-2">{aircraft.name}</h2>
                <div className="text-4xl font-bold text-primary mb-2">
                  {score}/{questions.length}
                </div>
                <div className="text-lg text-muted-foreground">
                  {percentage}% Correct
                </div>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <p className="text-lg font-medium">{getResultMessage()}</p>
              </div>

              <div className="flex gap-4 justify-center">
                <Link to={`/aircraft/${id}`}>
                  <Button variant="outline">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Aircraft
                  </Button>
                </Link>
                <Link to={`/quiz/${id}`}>
                  <Button
                    onClick={() => {
                      setShowResult(false);
                      setCurrentQuestion(0);
                      setScore(0);
                      setSelectedAnswer(null);
                      setIsAnswered(false);
                    }}
                  >
                    <Target className="mr-2 h-4 w-4" />
                    Try Again
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <Card>
            <CardContent className="text-center py-8">
              <h1 className="text-2xl font-bold">Loading Quiz...</h1>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const q = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <div className="flex items-center justify-between mb-4">
              <Link to={`/aircraft/${id}`}>
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Aircraft
                </Button>
              </Link>
              <Badge variant="secondary">
                Question {currentQuestion + 1} of {questions.length}
              </Badge>
            </div>

            <div className="space-y-2">
              <CardTitle className="text-2xl">Aircraft Quiz</CardTitle>
              <h2 className="text-lg font-semibold text-primary">
                {aircraft.name}
              </h2>
              <Progress value={progress} className="w-full" />
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-medium mb-4">{q.question}</h3>
            </div>

            <div className="grid gap-3">
              {q.options.map((option, index) => (
                <Button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  variant={getAnswerButtonVariant(option)}
                  className="h-auto p-4 text-left justify-start whitespace-normal"
                  disabled={isAnswered}
                  size="lg"
                >
                  <span className="text-sm font-medium mr-2">
                    {String.fromCharCode(65 + index)}.
                  </span>
                  {option}
                </Button>
              ))}
            </div>

            {isAnswered && (
              <div className="text-center p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">
                  {selectedAnswer === q.correct
                    ? "Correct! Well done."
                    : `Incorrect. The correct answer is: ${q.correct}`}
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Quiz;
