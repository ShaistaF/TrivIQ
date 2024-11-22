import pandas as pd
import numpy as np

def generate_analytics(data):
    df = pd.DataFrame(data)
    accuracy = (df['correct'].sum() / len(df)) * 100
    avg_difficulty = df['difficulty'].mean()
    return {
        'accuracy': accuracy,
        'avg_difficulty': avg_difficulty
    }
