// Function to calculate Levenshtein distance between two strings
function stringFilter(a: string, b: string): number {
    if (a.length === 0) return b.length;
    if (b.length === 0) return a.length;
  
    const matrix: number[][] = [];
  
    for (let i = 0; i <= b.length; i++) {
      matrix[i] = [i];
    }
  
    for (let j = 0; j <= a.length; j++) {
      matrix[0][j] = j;
    }
  
    for (let i = 1; i <= b.length; i++) {
      for (let j = 1; j <= a.length; j++) {
        const cost = a[j - 1] === b[i - 1] ? 0 : 1;
        matrix[i][j] = Math.min(
          matrix[i - 1][j] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j - 1] + cost
        );
      }
    }
  
    return matrix[b.length][a.length];
  }
  
  // Function to find the closest word in the array to user input
  export default function findClosestString(userInput: string, wordArray: string[]): string {
    let closestWord: string = '';
    let minDistance: number = Infinity;
  
    wordArray.forEach(word => {
      const distance: number = stringFilter(userInput, word);
      if (distance < minDistance) {
        minDistance = distance;
        closestWord = word;
      }
    });
  
    return closestWord;
  }
  