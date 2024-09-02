import React, { useState } from 'react';
import { Container, Form, Button, Alert, Card } from 'react-bootstrap';

function App() {
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState('');

  const calculateBMI = () => {
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);

      let bmiStatus = '';
      if (bmiValue < 18.5) {
        bmiStatus = 'Underweight';
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        bmiStatus = 'Normal weight';
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        bmiStatus = 'Overweight';
      } else {
        bmiStatus = 'Obesity';
      }
      setStatus(bmiStatus);
    } else {
      setStatus('Please enter valid height and weight.');
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: '100vh' }}
    >
      <Card className="p-4 shadow-sm" style={{ maxWidth: '400px', width: '100%' }}>
        <Card.Body>
          <Card.Title className="text-center mb-4" as="h2">
            BMI Calculator
          </Card.Title>
          <Form>
            <Form.Group className="mb-3" controlId="formAge">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter your age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formHeight">
              <Form.Label>Height (cm)</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter height in cm"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formWeight">
              <Form.Label>Weight (kg)</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter weight in kg"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" className="w-100" onClick={calculateBMI}>
              Calculate BMI
            </Button>
          </Form>

          {bmi && (
            <Alert className="mt-4 text-center" variant="info">
              <h4>Your BMI is {bmi}</h4>
              <p>You are classified as: <strong>{status}</strong></p>
            </Alert>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
}

export default App;
