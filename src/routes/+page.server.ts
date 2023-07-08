import { superValidate } from 'sveltekit-superforms/server';
import { interestSchema } from '$lib/schema';
import { fail } from '@sveltejs/kit';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const load = async () => {
	// Server API:
	const form = await superValidate(interestSchema);

	// Always return { form } in load and form actions.
	return { form };
};

export const actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, interestSchema);

		if (!form.valid) {
			return fail(400, { form });
		}

		const result = await prisma.launch_interest.create({
			data: {
				lodge_name: form.data.lodge_name,
				email: form.data.email
			}
		});

        if(!result) {
            throw new Error('Une erreur est survenue lors de l\'enregistrement de votre demande. Veuillez réessayer plus tard.');
        }

		return { form };
	}
};
