
// Every experiment should start with an intro view. Here you can welcome your participants and tell them what the experiment is about
const intro = magpieViews.intro, ({
    trials: 1,
    name: 'intro',
    // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
    text:   `Bienvenidos y bienvenidas`,
   buttonText: 'Empezar'
});

// For most tasks, you need instructions views
const instructions_practice = magpieViews.instructions, ({
    trials: 1,
    name: 'instructions_practice',
    title: 'Instrucciones generales',
    text:  `Se mostraran imagenes de manos y su tarea es identificar si la mano presentada es derecha o izquierda. Si la mano es izquierda se presiona la letra "J" si la mano es derecha se presiona la letra "L". En el caso de aparecer imagen de un cuerpo entero usted debe identificar cual brazo es el elevado. Si el brazo elevado es izquierdo presione la letra "J" si el brazo elevado es derecho presione la letra "L". Trate de responder lo mas rapido y correctamente posible!
            <br />
            <br />
            Vamos a practicar primero.`,
    buttonText: 'Practicar'
});

const practice = custom_views.keypress_rotation_practice({
    trials: 12,
    name: 'practice',
    trial_type: 'practice',
    pause: 500,
    fix_duration: 1500,
    data: _.shuffle(practice_trials.key_press),
    key1: "j",
    key2: "l",
    j: "izquierdo",
    l: "derecho",
});

const instructions_hands = magpieViews.instructions, ({
    trials: 1,
    name: 'instructions_hands',
    title: 'preparate para la prueba',
    text:  `A continuacion se mostraran imagenes de manos donde la tarea es identificar si la mano presentada es derecha o izquierda. Si cree que la mano es izquierda debe presionar la letra "J" si cree que la mano es derecha debe presionar la letra "L". Trate de responder lo mas rapido y correctamente posible!`,
    buttonText: 'Empezar'
});

const hands = custom_views.keypress_rotation_hands({
    trials: 12,
    name: 'hands',
    trial_type: 'hands',
    pause: 500,
    fix_duration: 1500,
    data: _.shuffle(hands_trials.key_press),
    key1: "j",
    key2: "l",
    j: "izquierdo",
    l: "derecho",
});

const instructions_bodies = magpieViews.instructions, ({
    trials: 1,
    name: 'instructions_bodies',
    title: 'preparate para la prueba',
    text:  `A continuacion se mostraran imagenes de cuerpo entero donde la tarea es identificar cual brazo es el elevado. Si el brazo elevado es izquierdo presione la letra "J" si el brazo elevado es derecho presione la letra "L". Trate de responder lo mas rapido y correctamente posible!`,
    buttonText: 'Empezar'
});

const bodies = custom_views.keypress_rotation_bodies({
    trials: 12,
    name: 'bodies',
    trial_type: 'bodies',
    pause: 500,
    fix_duration: 1500,
    data: _.shuffle(bodies_trials.key_press),
    key1: "j",
    key2: "l",
    j: "izquierdo",
    l: "derecho",
});

// The 'thanks' view is crucial; never delete it; it submits the results!
const thanks = magpieViews.thanks, ({
    trials: 1,
    name: 'thanks',
    title: 'Gracias por participar en esta prueba!',
    prolificConfirmText: 'Press the button'
});
