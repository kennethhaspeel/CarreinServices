
import 'react-google-reviews/dist/index.css';

export default async function Footer() {
	"use cache";

	return (
		<footer className="mt-auto grid w-full grid-cols-3 gap-4 border-t px-6 py-4 text-center text-sm text-gray-600">
			<div />
			<div>
				<p>&copy; {new Date().getFullYear()} Carrein Services. All rights reserved.</p>
			</div>
			
    
		</footer>
	);
}
