#!/bin/sh

# Original: https://github.com/polybar/polybar-scripts/tree/master/polybar-scripts/updates-arch-combined

if ! updates_arch=$(pacman -Que 2> /dev/null | wc -l ); then
    updates_arch=0
fi

if ! updates_aur=$(yay -Qum 2> /dev/null | wc -l); then
    updates_aur=0
fi

updates=$(("$updates_arch" + "$updates_aur"))

if [ "$updates" -gt 0 ]; then
    echo "$updates"
else
    echo ""
fi
