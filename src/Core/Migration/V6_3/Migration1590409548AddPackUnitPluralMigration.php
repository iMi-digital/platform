<?php declare(strict_types=1);

namespace Shopware\Core\Migration\V6_3;

use Doctrine\DBAL\Connection;
use Shopware\Core\Framework\Migration\MigrationStep;

/**
 * @deprecated tag:v6.5.0 - reason:becomes-internal - Migrations will be internal in v6.5.0
 */
class Migration1590409548AddPackUnitPluralMigration extends MigrationStep
{
    public function getCreationTimestamp(): int
    {
        return 1590409548;
    }

    public function update(Connection $connection): void
    {
        $connection->executeStatement('
            ALTER TABLE `product_translation`
            ADD COLUMN `pack_unit_plural` VARCHAR(255) COLLATE utf8mb4_unicode_ci NULL
        ');
    }

    public function updateDestructive(Connection $connection): void
    {
    }
}
