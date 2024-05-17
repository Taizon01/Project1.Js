/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be? *Line 12
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1. *Line 17-27
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name)) *Line 31-36
4. For good measure, getTotalSupply() should return the number of NFT's you have created *Line  39-41
*/

// create a variable to hold your NFT's
const NFTs = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.  
function mintNFT (surname, blockNcourse, year, school) 
{
    const NFT = {
        "SurName" : surname,
        "BlockNCourse" : blockNcourse,
        "Year" : year,
        "School" : school
    }   
    NFTs.push(NFT); 
    console.log("Minted : " +surname);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i=0;i<NFTs.length;i++)
    {   
        console.log(NFTs[i]);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total Number of NFTs created : " +NFTs.length);
}

// call your functions below this line

// My Information
mintNFT("Bongcarawan", "2.4 BSIT", "2nd Year College", "National Teacher College");
// Classmate Information
mintNFT("Joaquin", "2.4 BSIT","2nd Year College", "National Teacher College");

getTotalSupply();

listNFTs();
