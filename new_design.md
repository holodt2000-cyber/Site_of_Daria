<!-- FinPulse - Start Screen (V2) -->
<!DOCTYPE html>

<html lang="ru"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "on-secondary": "#ffffff",
                    "primary-fixed": "#58fbda",
                    "on-primary-fixed": "#00201a",
                    "secondary": "#586062",
                    "surface-container-high": "#e7e8e9",
                    "tertiary-fixed": "#80f7db",
                    "tertiary": "#006b5a",
                    "primary": "#006b5a",
                    "secondary-fixed": "#dde4e6",
                    "inverse-primary": "#2cdebf",
                    "surface-dim": "#d9dadb",
                    "surface-tint": "#006b5a",
                    "secondary-container": "#dae1e3",
                    "surface-bright": "#f8f9fa",
                    "on-error": "#ffffff",
                    "on-error-container": "#93000a",
                    "on-tertiary-fixed": "#00201a",
                    "on-tertiary-fixed-variant": "#005143",
                    "secondary-fixed-dim": "#c1c8ca",
                    "tertiary-fixed-dim": "#61dac0",
                    "on-background": "#191c1d",
                    "surface-container-low": "#f3f4f5",
                    "primary-fixed-dim": "#2cdebf",
                    "background": "#f8f9fa",
                    "on-surface": "#191c1d",
                    "on-secondary-fixed": "#161d1f",
                    "outline": "#6b7a75",
                    "inverse-surface": "#2e3132",
                    "tertiary-container": "#52cdb3",
                    "surface-variant": "#e1e3e4",
                    "primary-container": "#00d1b2",
                    "on-tertiary-container": "#005446",
                    "on-surface-variant": "#3b4a45",
                    "inverse-on-surface": "#f0f1f2",
                    "surface-container-lowest": "#ffffff",
                    "error": "#ba1a1a",
                    "on-primary": "#ffffff",
                    "surface-container": "#edeeef",
                    "on-secondary-fixed-variant": "#41484a",
                    "error-container": "#ffdad6",
                    "surface": "#f8f9fa",
                    "on-secondary-container": "#5d6466",
                    "on-primary-fixed-variant": "#005143",
                    "on-primary-container": "#005446",
                    "outline-variant": "#bacac4",
                    "on-tertiary": "#ffffff",
                    "surface-container-highest": "#e1e3e4"
            },
            "borderRadius": {
                    "DEFAULT": "0.25rem",
                    "lg": "0.5rem",
                    "xl": "0.75rem",
                    "full": "9999px"
            },
            "spacing": {
                    "md": "16px",
                    "lg": "24px",
                    "xs": "4px",
                    "margin": "24px",
                    "unit": "4px",
                    "sm": "8px",
                    "xl": "32px",
                    "gutter": "16px"
            },
            "fontFamily": {
                    "label-md": ["Inter"],
                    "headline-lg": ["Inter"],
                    "headline-xl": ["Inter"],
                    "body-lg": ["Inter"],
                    "body-md": ["Inter"],
                    "label-sm": ["Inter"],
                    "headline-md": ["Inter"]
            },
            "fontSize": {
                    "label-md": ["14px", {"lineHeight": "20px", "fontWeight": "600"}],
                    "headline-lg": ["32px", {"lineHeight": "40px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                    "headline-xl": ["40px", {"lineHeight": "48px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                    "body-lg": ["18px", {"lineHeight": "28px", "fontWeight": "400"}],
                    "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
                    "label-sm": ["12px", {"lineHeight": "16px", "fontWeight": "500"}],
                    "headline-md": ["24px", {"lineHeight": "32px", "fontWeight": "600"}]
            }
          },
        },
      }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .pillow-shadow {
            box-shadow: 0 20px 40px rgba(45, 52, 54, 0.05);
        }
        .active-interaction:active {
            transform: scale(0.95);
            transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-surface font-body-md text-on-surface min-h-screen flex flex-col">
<!-- TopAppBar Section -->
<header class="sticky top-0 z-50 bg-slate-50 border-b border-slate-200/60 shadow-[0_20px_40px_rgba(45,52,54,0.05)] px-6 py-4 flex items-center justify-between w-full">
<div class="flex items-center gap-4">
<button class="material-symbols-outlined text-[#00D1B2] active:scale-95 transition-transform duration-150 p-2 hover:bg-slate-100 rounded-full" data-icon="arrow_back">
                arrow_back
            </button>
<span class="text-xl font-black text-[#00D1B2] tracking-tighter font-['Inter'] antialiased">FinPulse</span>
</div>
<div class="flex items-center gap-2">
<button class="material-symbols-outlined text-slate-400 p-2 hover:bg-slate-100 rounded-full" data-icon="help_outline">
                help_outline
            </button>
</div>
</header>
<!-- Main Content Canvas -->
<main class="flex-1 max-w-md mx-auto w-full px-margin py-xl space-y-xl">
<!-- Header Text Section -->
<div class="space-y-sm">
<h1 class="text-headline-lg font-headline-lg text-on-background">
                ❓ ЧТО ТЫ ХОЧЕШЬ СДЕЛАТЬ?
            </h1>
<p class="text-body-lg font-body-lg text-on-surface-variant">
                Выбери сценарий, который тебе подходит
            </p>
</div>
<!-- Selection Cards (Asymmetric/Modern Layout) -->
<div class="grid grid-cols-1 gap-gutter">
<!-- Card 1: Shop -->
<button class="group relative overflow-hidden bg-surface-container-lowest border border-slate-200/60 rounded-[24px] p-lg text-left pillow-shadow active-interaction w-full flex items-start gap-md transition-all hover:border-primary-container">
<div class="flex-shrink-0 w-16 h-16 rounded-full bg-primary-container/10 flex items-center justify-center">
<span aria-label="Shopping Cart" class="text-3xl" role="img">🛒</span>
</div>
<div class="flex-1 space-y-xs">
<div class="flex justify-between items-center">
<span class="px-sm py-[2px] bg-secondary-container text-on-secondary-container text-label-sm font-label-sm rounded-full">
                            3 минуты
                        </span>
</div>
<h2 class="text-headline-md font-headline-md text-on-surface mt-xs">КУПИТЬ?</h2>
<p class="text-body-md font-body-md text-on-surface-variant">Проверить, нужна ли мне покупка</p>
</div>
<div class="absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity">
<span class="material-symbols-outlined text-primary" data-icon="chevron_right">chevron_right</span>
</div>
</button>
<!-- Card 2: Family -->
<button class="group relative overflow-hidden bg-surface-container-lowest border border-slate-200/60 rounded-[24px] p-lg text-left pillow-shadow active-interaction w-full flex items-start gap-md transition-all hover:border-primary-container">
<div class="flex-shrink-0 w-16 h-16 rounded-full bg-tertiary-container/10 flex items-center justify-center">
<span aria-label="Family" class="text-3xl" role="img">👨‍👩‍👧‍👦</span>
</div>
<div class="flex-1 space-y-xs">
<div class="flex justify-between items-center">
<span class="px-sm py-[2px] bg-tertiary-container text-on-tertiary-container text-label-sm font-label-sm rounded-full">
                            5 советов
                        </span>
</div>
<h2 class="text-headline-md font-headline-md text-on-surface mt-xs">ПРЕДУПРЕДИТЬ БЛИЗКИХ?</h2>
<p class="text-body-md font-body-md text-on-surface-variant">Советы для родителей</p>
</div>
<div class="absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity">
<span class="material-symbols-outlined text-primary" data-icon="chevron_right">chevron_right</span>
</div>
</button>
</div>
<!-- Decorative Visual Element -->
<div class="mt-xl pt-lg">
<div class="relative w-full h-48 rounded-[24px] overflow-hidden">
<img alt="Financial growth visualization" class="w-full h-full object-cover grayscale opacity-20" data-alt="Modern minimalist home office with natural light, clean desk, piggy bank, and soft green plants, peaceful atmosphere" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoWedJPD6je3DaWt1my2Qc7wRBP_CWonIdIxNovnr8FGNjK-fAymGTcPKi80SY1tb5JUPC6uyr0tjSn555WCHVKm56Fl_Lq5fV7xCE0HLz39sPS5LjBY6qRsqiEuTg8tB1I5v1tw72FvqBwjvnKrDVaWBV58Ao6XU5N-gJIcezSKorB6J_-Ike13wanIRVlpuhQmgjWOwrNjtJFR-oX5789R0stEnxnU9cH3eBIPqO9KVe_a4Y0C5LMP2o7QDiLGloGY3mC47HG4MS"/>
<div class="absolute inset-0 bg-gradient-to-t from-surface to-transparent"></div>
<div class="absolute bottom-6 left-6 right-6">
<p class="text-label-md font-label-md text-primary uppercase tracking-widest">FinPulse Wisdom</p>
<p class="text-body-md font-body-md italic text-on-surface-variant">"Осознанность — первый шаг к финансовой свободе."</p>
</div>
</div>
</div>
</main>
<!-- Bottom Spacing for rounded devices -->
<div class="h-8"></div>
</body></html>

<!-- FinPulse - Quiz Screen (V2) -->
<!DOCTYPE html>

<html class="light" lang="ru"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "on-secondary": "#ffffff",
                        "primary-fixed": "#58fbda",
                        "on-primary-fixed": "#00201a",
                        "secondary": "#586062",
                        "surface-container-high": "#e7e8e9",
                        "tertiary-fixed": "#80f7db",
                        "tertiary": "#006b5a",
                        "primary": "#006b5a",
                        "secondary-fixed": "#dde4e6",
                        "inverse-primary": "#2cdebf",
                        "surface-dim": "#d9dadb",
                        "surface-tint": "#006b5a",
                        "secondary-container": "#dae1e3",
                        "surface-bright": "#f8f9fa",
                        "on-error": "#ffffff",
                        "on-error-container": "#93000a",
                        "on-tertiary-fixed": "#00201a",
                        "on-tertiary-fixed-variant": "#005143",
                        "secondary-fixed-dim": "#c1c8ca",
                        "tertiary-fixed-dim": "#61dac0",
                        "on-background": "#191c1d",
                        "surface-container-low": "#f3f4f5",
                        "primary-fixed-dim": "#2cdebf",
                        "background": "#f8f9fa",
                        "on-surface": "#191c1d",
                        "on-secondary-fixed": "#161d1f",
                        "outline": "#6b7a75",
                        "inverse-surface": "#2e3132",
                        "tertiary-container": "#52cdb3",
                        "surface-variant": "#e1e3e4",
                        "primary-container": "#00d1b2",
                        "on-tertiary-container": "#005446",
                        "on-surface-variant": "#3b4a45",
                        "inverse-on-surface": "#f0f1f2",
                        "surface-container-lowest": "#ffffff",
                        "error": "#ba1a1a",
                        "on-primary": "#ffffff",
                        "surface-container": "#edeeef",
                        "on-secondary-fixed-variant": "#41484a",
                        "error-container": "#ffdad6",
                        "surface": "#f8f9fa",
                        "on-secondary-container": "#5d6466",
                        "on-primary-fixed-variant": "#005143",
                        "on-primary-container": "#005446",
                        "outline-variant": "#bacac4",
                        "on-tertiary": "#ffffff",
                        "surface-container-highest": "#e1e3e4"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "2xl": "16px",
                        "3xl": "24px",
                        "full": "9999px"
                    },
                    "spacing": {
                        "md": "16px",
                        "lg": "24px",
                        "xs": "4px",
                        "margin": "24px",
                        "unit": "4px",
                        "sm": "8px",
                        "xl": "32px",
                        "gutter": "16px"
                    },
                    "fontFamily": {
                        "label-md": ["Inter"],
                        "headline-lg": ["Inter"],
                        "headline-xl": ["Inter"],
                        "body-lg": ["Inter"],
                        "body-md": ["Inter"],
                        "label-sm": ["Inter"],
                        "headline-md": ["Inter"]
                    },
                    "fontSize": {
                        "label-md": ["14px", {"lineHeight": "20px", "fontWeight": "600"}],
                        "headline-lg": ["32px", {"lineHeight": "40px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                        "headline-xl": ["40px", {"lineHeight": "48px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                        "body-lg": ["18px", {"lineHeight": "28px", "fontWeight": "400"}],
                        "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
                        "label-sm": ["12px", {"lineHeight": "16px", "fontWeight": "500"}],
                        "headline-md": ["24px", {"lineHeight": "32px", "fontWeight": "600"}]
                    }
                }
            }
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        body {
            background-color: #f8f9fa;
            font-family: 'Inter', sans-serif;
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background text-on-background min-h-screen flex flex-col">
<header class="sticky top-0 z-50 bg-slate-50 border-b border-slate-200/60 shadow-[0_20px_40px_rgba(45,52,54,0.05)]">
<div class="flex items-center justify-between w-full px-6 py-4">
<button class="flex items-center gap-2 text-primary font-label-md transition-transform duration-150 active:scale-95">
<span class="material-symbols-outlined" data-icon="arrow_back">arrow_back</span>
<span>Назад</span>
</button>
<h1 class="text-xl font-black text-[#00D1B2] tracking-tighter antialiased">FinPulse</h1>
<div class="w-10"></div>
</div>
</header>
<main class="flex-grow flex flex-col px-margin py-lg max-w-2xl mx-auto w-full">
<div class="mb-xl">
<div class="flex justify-between items-center mb-sm">
<span class="text-label-md font-label-md text-on-surface-variant">Вопрос 1 из 6</span>
<span class="text-label-sm font-label-sm text-primary font-bold">15% Завершено</span>
</div>
<div class="h-3 w-full bg-surface-container rounded-full overflow-hidden shadow-inner">
<div class="h-full bg-primary-container w-[16%] rounded-full transition-all duration-500"></div>
</div>
</div>
<section class="mb-xl">
<div class="bg-surface-container-lowest border border-slate-200 p-lg rounded-3xl shadow-[0_20px_40px_rgba(45,52,54,0.05)] relative overflow-hidden">
<div class="absolute -right-8 -top-8 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
<h2 class="text-headline-md font-headline-md text-on-surface leading-tight relative z-10">
                    Что такое "Сложный процент" и как он влияет на ваши долгосрочные накопления?
                </h2>
</div>
</section>
<section class="space-y-gutter flex-grow">
<button class="w-full text-left p-lg bg-surface-container-lowest border border-slate-200 rounded-2xl hover:border-primary-container transition-all duration-200 active:scale-[0.98] group flex items-start gap-md">
<div class="flex-shrink-0 w-8 h-8 rounded-full bg-surface-container group-hover:bg-primary-container flex items-center justify-center text-label-md text-on-surface-variant group-hover:text-on-primary-container font-bold">A</div>
<p class="text-body-md font-body-md text-on-surface">Процент, который начисляется только на первоначальную сумму вклада ежегодно.</p>
</button>
<button class="w-full text-left p-lg bg-white border-2 border-primary-container rounded-2xl shadow-lg shadow-primary-container/10 transition-all duration-200 flex items-start gap-md ring-4 ring-primary-container/5">
<div class="flex-shrink-0 w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-label-md text-on-primary-container font-bold">B</div>
<p class="text-body-md font-body-md text-on-surface">Процесс, при котором прибыль от инвестиций реинвестируется и сама начинает генерировать доход.</p>
</button>
<button class="w-full text-left p-lg bg-surface-container-lowest border border-slate-200 rounded-2xl hover:border-primary-container transition-all duration-200 active:scale-[0.98] group flex items-start gap-md">
<div class="flex-shrink-0 w-8 h-8 rounded-full bg-surface-container group-hover:bg-primary-container flex items-center justify-center text-label-md text-on-surface-variant group-hover:text-on-primary-container font-bold">C</div>
<p class="text-body-md font-body-md text-on-surface">Налог на прибыль, который увеличивается пропорционально сроку владения активами.</p>
</button>
<button class="w-full text-left p-lg bg-surface-container-lowest border border-slate-200 rounded-2xl hover:border-primary-container transition-all duration-200 active:scale-[0.98] group flex items-start gap-md">
<div class="flex-shrink-0 w-8 h-8 rounded-full bg-surface-container group-hover:bg-primary-container flex items-center justify-center text-label-md text-on-surface-variant group-hover:text-on-primary-container font-bold">D</div>
<p class="text-body-md font-body-md text-on-surface">Фиксированная банковская комиссия за обслуживание высокорисковых счетов.</p>
</button>
</section>
<div class="mt-xl pt-lg">
<button class="w-full bg-primary-container text-on-primary-container py-4 px-lg rounded-full font-label-md text-lg shadow-xl shadow-primary-container/20 hover:brightness-105 active:scale-95 transition-all flex items-center justify-center gap-2">
<span>Ответить</span>
<span class="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
</main>
<div class="hidden lg:block fixed -left-20 top-1/4 w-64 h-64 bg-primary/5 rounded-full blur-[80px]"></div>
<div class="hidden lg:block fixed -right-20 bottom-1/4 w-80 h-80 bg-tertiary-container/10 rounded-full blur-[100px]"></div>
</body></html>

<!-- FinPulse - Advice for Parents (V2) -->
<!DOCTYPE html>

<html lang="ru"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&amp;family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "on-secondary": "#ffffff",
                    "primary-fixed": "#58fbda",
                    "on-primary-fixed": "#00201a",
                    "secondary": "#586062",
                    "surface-container-high": "#e7e8e9",
                    "tertiary-fixed": "#80f7db",
                    "tertiary": "#006b5a",
                    "primary": "#006b5a",
                    "secondary-fixed": "#dde4e6",
                    "inverse-primary": "#2cdebf",
                    "surface-dim": "#d9dadb",
                    "surface-tint": "#006b5a",
                    "secondary-container": "#dae1e3",
                    "surface-bright": "#f8f9fa",
                    "on-error": "#ffffff",
                    "on-error-container": "#93000a",
                    "on-tertiary-fixed": "#00201a",
                    "on-tertiary-fixed-variant": "#005143",
                    "secondary-fixed-dim": "#c1c8ca",
                    "tertiary-fixed-dim": "#61dac0",
                    "on-background": "#191c1d",
                    "surface-container-low": "#f3f4f5",
                    "primary-fixed-dim": "#2cdebf",
                    "background": "#f8f9fa",
                    "on-surface": "#191c1d",
                    "on-secondary-fixed": "#161d1f",
                    "outline": "#6b7a75",
                    "inverse-surface": "#2e3132",
                    "tertiary-container": "#52cdb3",
                    "surface-variant": "#e1e3e4",
                    "primary-container": "#00d1b2",
                    "on-tertiary-container": "#005446",
                    "on-surface-variant": "#3b4a45",
                    "inverse-on-surface": "#f0f1f2",
                    "surface-container-lowest": "#ffffff",
                    "error": "#ba1a1a",
                    "on-primary": "#ffffff",
                    "surface-container": "#edeeef",
                    "on-secondary-fixed-variant": "#41484a",
                    "error-container": "#ffdad6",
                    "surface": "#f8f9fa",
                    "on-secondary-container": "#5d6466",
                    "on-primary-fixed-variant": "#005143",
                    "on-primary-container": "#005446",
                    "outline-variant": "#bacac4",
                    "on-tertiary": "#ffffff",
                    "surface-container-highest": "#e1e3e4"
            },
            "borderRadius": {
                    "DEFAULT": "0.25rem",
                    "lg": "0.5rem",
                    "xl": "0.75rem",
                    "2xl": "1.5rem",
                    "full": "9999px"
            },
            "spacing": {
                    "md": "16px",
                    "lg": "24px",
                    "xs": "4px",
                    "margin": "24px",
                    "unit": "4px",
                    "sm": "8px",
                    "xl": "32px",
                    "gutter": "16px"
            },
            "fontFamily": {
                    "label-md": ["Inter"],
                    "headline-lg": ["Inter"],
                    "headline-xl": ["Inter"],
                    "body-lg": ["Inter"],
                    "body-md": ["Inter"],
                    "label-sm": ["Inter"],
                    "headline-md": ["Inter"]
            },
            "fontSize": {
                    "label-md": ["14px", {"lineHeight": "20px", "fontWeight": "600"}],
                    "headline-lg": ["32px", {"lineHeight": "40px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                    "headline-xl": ["400px", {"lineHeight": "48px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                    "body-lg": ["18px", {"lineHeight": "28px", "fontWeight": "400"}],
                    "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
                    "label-sm": ["12px", {"lineHeight": "16px", "fontWeight": "500"}],
                    "headline-md": ["24px", {"lineHeight": "32px", "fontWeight": "600"}]
            }
          },
        },
      }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .glass-card {
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.3);
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background text-on-background font-body-md min-h-screen pb-xl">
<!-- Top AppBar (From Shared Components Logic) -->
<header class="sticky top-0 z-50 bg-slate-50 border-b border-slate-200/60 shadow-[0_20px_40px_rgba(45,52,54,0.05)] font-['Inter'] antialiased tracking-tight">
<div class="flex items-center justify-between w-full px-6 py-4">
<button class="flex items-center gap-2 text-primary-container active:scale-95 transition-transform duration-150">
<span class="material-symbols-outlined" data-icon="arrow_back">arrow_back</span>
<span class="text-label-md font-label-md">← Назад</span>
</button>
<h1 class="text-xl font-black text-[#00D1B2] tracking-tighter">FinPulse</h1>
<div class="w-10"></div> <!-- Spacer for centering -->
</div>
</header>
<main class="max-w-2xl mx-auto px-margin pt-lg space-y-xl">
<!-- Hero Section -->
<section class="text-center space-y-md">
<div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-container/10 text-4xl mb-sm">
                💡
            </div>
<h2 class="text-headline-lg font-headline-lg text-on-background px-xs">
                Как помочь ребёнку тратить деньги с умом
            </h2>
<p class="text-body-lg font-body-lg text-on-surface-variant">
                (и не поссориться из-за этого)
            </p>
</section>
<!-- Advice Content: Bento-ish Grid Layout -->
<div class="grid grid-cols-1 gap-gutter">
<!-- Advice Item 1 -->
<div class="glass-card p-lg rounded-2xl shadow-[0_20px_40px_rgba(45,52,54,0.04)] hover:shadow-lg transition-shadow duration-300">
<div class="flex items-start gap-md">
<div class="flex-shrink-0 w-12 h-12 rounded-xl bg-tertiary-container/20 flex items-center justify-center text-primary">
<span class="material-symbols-outlined" data-icon="account_balance_wallet">account_balance_wallet</span>
</div>
<div class="space-y-sm">
<h3 class="text-headline-md font-headline-md text-on-surface">Выдавайте карманные деньги регулярно</h3>
<p class="text-body-md font-body-md text-on-surface-variant">Определите фиксированную сумму и график выплат. Это учит ребенка планировать свой бюджет на определенный период, а не просить деньги каждый раз, когда они закончились.</p>
</div>
</div>
</div>
<!-- Advice Item 2 -->
<div class="glass-card p-lg rounded-2xl shadow-[0_20px_40px_rgba(45,52,54,0.04)] hover:shadow-lg transition-shadow duration-300">
<div class="flex items-start gap-md">
<div class="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary-container/30 flex items-center justify-center text-secondary">
<span class="material-symbols-outlined" data-icon="savings">savings</span>
</div>
<div class="space-y-sm">
<h3 class="text-headline-md font-headline-md text-on-surface">Разрешите совершать ошибки</h3>
<p class="text-body-md font-body-md text-on-surface-variant">Если ребенок потратил все деньги в первый же день — это ценный опыт. Не пополняйте баланс досрочно, дайте ему прочувствовать последствия своих решений в безопасной среде.</p>
</div>
</div>
</div>
<!-- Visual Break/Graphic -->
<div class="relative h-48 rounded-2xl overflow-hidden my-md">
<img alt="Financial education" class="w-full h-full object-cover" data-alt="Young parent and child sitting together laughing over a colorful piggy bank in a bright minimalist living room" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkZum5Teq5l1HknHLn-9sXZFliVBwKnhnHQUcdqJJB4IMGR388oHjTG_AB0DGFFWkEf-wWC_DxiNoPPFXqJPD_mNjSXPyMjk52Bv86IHjsBrcJeySd6onw-rufLh2GCWs4qAb1faZiWd2jXiEVnn6ruySrNwtipDyG8IBkxFytacHkiUeaa0n1K7Sd8t76SsgvEiqN4IYytn-_izhGhTXtLEgd2_jNyJfVcj2b7JeJrv2Aw5bVBisaAEeeyAdVYD5if4hSpwJKnkaZ"/>
<div class="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex items-end p-lg">
<p class="text-on-primary font-bold text-lg">Стройте доверие через финансовую свободу</p>
</div>
</div>
<!-- Advice Item 3 -->
<div class="glass-card p-lg rounded-2xl shadow-[0_20px_40px_rgba(45,52,54,0.04)] hover:shadow-lg transition-shadow duration-300">
<div class="flex items-start gap-md">
<div class="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-container/20 flex items-center justify-center text-primary">
<span class="material-symbols-outlined" data-icon="shopping_cart">shopping_cart</span>
</div>
<div class="space-y-sm">
<h3 class="text-headline-md font-headline-md text-on-surface">Обсуждайте разницу между желаниями и потребностями</h3>
<p class="text-body-md font-body-md text-on-surface-variant">Помогайте ребенку анализировать покупки. Спрашивайте: «Тебе это действительно нужно сейчас или это просто минутное желание?» Это формирует осознанный подход к потреблению.</p>
</div>
</div>
</div>
<!-- Advice Item 4 -->
<div class="glass-card p-lg rounded-2xl shadow-[0_20px_40px_rgba(45,52,54,0.04)] hover:shadow-lg transition-shadow duration-300">
<div class="flex items-start gap-md">
<div class="flex-shrink-0 w-12 h-12 rounded-xl bg-tertiary-container/20 flex items-center justify-center text-primary">
<span class="material-symbols-outlined" data-icon="analytics">analytics</span>
</div>
<div class="space-y-sm">
<h3 class="text-headline-md font-headline-md text-on-surface">Используйте приложение для совместного контроля</h3>
<p class="text-body-md font-body-md text-on-surface-variant">В FinPulse вы можете видеть траты ребенка в реальном времени. Обсуждайте отчеты в конце недели не как надзиратель, а как финансовый консультант.</p>
</div>
</div>
</div>
<!-- Advice Item 5 -->
<div class="glass-card p-lg rounded-2xl shadow-[0_20px_40px_rgba(45,52,54,0.04)] hover:shadow-lg transition-shadow duration-300">
<div class="flex items-start gap-md">
<div class="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary-container/30 flex items-center justify-center text-secondary">
<span class="material-symbols-outlined" data-icon="stars">stars</span>
</div>
<div class="space-y-sm">
<h3 class="text-headline-md font-headline-md text-on-surface">Поощряйте накопления</h3>
<p class="text-body-md font-body-md text-on-surface-variant">Предложите систему бонусов: например, добавляйте 10% к сумме, которую ребенок смог отложить за месяц. Это отличная мотивация для достижения крупных целей.</p>
</div>
</div>
</div>
</div>
<!-- Sticky Bottom Action (CTA) -->
<div class="pt-xl">
<button class="w-full py-lg px-xl bg-primary-container text-on-tertiary-container rounded-full font-label-md text-body-lg shadow-[0_8px_16px_rgba(0,209,178,0.3)] hover:brightness-105 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-sm">
<span class="material-symbols-outlined" data-icon="quiz">quiz</span>
                🛒 Пройти тест
            </button>
<p class="text-center text-label-sm font-label-sm text-on-surface-variant mt-md">
                Проверьте, готов ли ваш ребенок к финансовой самостоятельности
            </p>
</div>
</main>
<!-- Decorative Background Elements -->
<div class="fixed top-20 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
<div class="fixed bottom-20 -right-20 w-80 h-80 bg-tertiary/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
</body></html>