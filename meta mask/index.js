// Wait for the page to load
window.addEventListener('load', async () => {
    // Check if MetaMask is installed
    if (window.ethereum) {
      const connectButton = document.getElementById('connectButton');
  
      // Handle button click event
      connectButton.addEventListener('click', async () => {
        try {
          // Request MetaMask to connect
          await ethereum.request({ method: 'eth_requestAccounts' });
  
          // MetaMask is now connected and you can access the web3 provider
          const web3 = new Web3(window.ethereum);
          // You can now use the web3 instance to interact with the Ethereum network
  
          // Example: Get the current accounts
          const accounts = await web3.eth.getAccounts();
          console.log('Connected account:', accounts[0]);
  
          // Perform other actions with MetaMask-connected web3
  
        } catch (error) {
          console.error(error);
        }
      });
    } else {
      console.log('MetaMask is not installed');
    }
  });
  