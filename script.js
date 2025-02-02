function stringChop(str, size) {
  // your code here
	if(str===null || str==="")
	{
		return [];
	}
	let chunk=[];
	for(let i=0;i<str.length;i=i+size)
		{
			let strslice=str.slice(i,i+size);
			chunk.push(strslice);
		}
	return chunk;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));

