<?php 
 $badgeColors = [
    'Friendly' => 'badge-success',
    'Hostile' => 'badge-error',
    'unknown' => '',
    'Neutral' => 'badge-primary'
]
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/daisyui@4.9.0/dist/full.min.css" rel="stylesheet" type="text/css" />
    <script src="https://cdn.tailwindcss.com"></script>
</head>

<body>
    <?php
    include ('planets.php');
    // var_dump($planets);
    ?>
    <h1 class="text-3xl text-primary font-bold text-center py-5">Planets</h1>
    <!-- Wrapper for the cards -->
    <div class="flex flex-wrap md:w-8/12 mx-auto">
        <!-- Beginning of a card - This is what you should clone -->
        <div class="md:w-3/12 w-full p-3">
            <div class="card bg-base-200 shadow-xl">
                <div class="card-body items-center text-center">
                    <h2 class="card-title text-secondary mb-3">P2A-270</h2>
                    <div class="flex">
                        <div class="badge badge-success badge-outline mr-3 truncate">Friendly</div>
                        <div class="badge badge-outline truncate">Reachable</div>
                    </div>
                    <div class="card-actions justify-end mt-3">
                        <button class="btn btn-primary">Reachable</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- End of a card  -->
        <!-- Beginning of the disabled card -->
        <div class="md:w-3/12 w-full p-3">
            <div class="card bg-base-200 shadow-xl">
                <div class="card-body items-center text-center">
                    <h2 class="card-title text-secondary mb-3">P2A-007</h2>
                    <div class="flex">
                        <div class="badge badge-error badge-outline mr-3">Hostile</div>
                        <div class="badge badge-outline">Destroyed</div>
                    </div>
                    <div class="card-actions justify-end mt-3">
                        <button class="btn btn-disabled">Destroyed</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- End of a card  -->
        <?php foreach($planets as $planet): ?>
            <?php $name = $planet['name']; ?>
            <?php $info = $planet['info']; ?>
            <?php $gate = $planet['gate']; ?>
            <div class="md:w-3/12 w-full p-3">
                <div class="card bg-base-200 shadow-xl">
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-secondary mb-3"><?= $name ?></h2>
                        <div class="flex">
                            <?php 
                            $targetColor = '';
                            foreach($badgeColors as $stat => $color) if ($stat == $info) $targetColor = $color;
                            ?>    
                            <div class="badge <?= $targetColor ?> badge-outline mr-3 truncate"><?= $info ?></div>
                            <div class="badge badge-outline truncate"><?= $gate ?></div>
                        </div>
                        <div class="card-actions justify-end mt-3">
                            <button class="btn <?= $gate === "Destroyed" ? 'btn-disabled' : 'btn-primary' ?>"><?= $gate ?></button>
                        </div>
                    </div>
                </div>
            </div>
        <?php endforeach; ?>
    </div>
    <!-- End of the wrapper -->
</body>

</html>