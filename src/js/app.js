export default function sorting(players) {
    const key = 'health';
    return players.sort((player1, player2) => player2[key] - player1[key]);
  }
