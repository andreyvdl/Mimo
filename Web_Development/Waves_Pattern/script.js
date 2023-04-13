let	line = "🌊🌊🌊🌊🌊🌊🌊";
let	counter = 1;

console.log("🌞");
while (counter < 5)
{
	console.log(line);
	line = line.slice(0, -4);
	counter++;
}
