import { z } from 'zod';

// Name has a default value just to display something in the form.
export const interestSchema = z.object({
	lodge_name: z.string().nonempty({
		message: 'Nom requis'
	}),
	email: z.string().email('Courrriel invalide').nonempty({
		message: 'Courriel requis'
	})
});
